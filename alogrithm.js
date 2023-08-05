import axios from 'axios';
import rateLimit from 'axios-rate-limit';
import { distance } from 'mathjs';
const similarity = require( 'compute-cosine-similarity' );

const http = rateLimit(
  axios.create(),
  { maxRequests: 5000, perMilliseconds: 100, maxRPS: 2 }
);

const MAX_BATCH_LENGTH = 100;

const whichSetContains = (sets, id) => {
  for (let i = 0; i < sets.length; i++) {
    if (sets[i].has(id)) {
      return i;
    }
  }

  return -1;
}

// Count up number of times a user is represented in the set for each user
// Return the minimum count
const getSetScore = (set, tracks, users) => {
  counter = {}
  for (const user of users) {
    counter[user] = 0
  }

  for (const trackId of Array.from(set)) {
    let userId = tracks.find(((track) => track.id === trackId)).owner;

    counter[userId]++;
  }

  let score = 0;
  let counts = Object.values(counter)
  let discount = 1;

  while (counts.length > 0) {
    const min = Math.min(...counts);

    score += min * discount;
    const minIndex = counts.findIndex((count) => count === min);
    counts.splice(minIndex, 1);

    counts = counts.map((count) => count - min);
    discount *= 0.5
  }

  return score;
}

const theAlgorithm = async (seedSongs, topTracks, users, limit, accessToken) => {

  // 1. Get top 20 songs from each user
  // 2. Get seed songs from each user
  // 3. Get vector representation of each song
  const batches = [];
  let features = [];
  const total = [...seedSongs, ...topTracks];
  console.log('seedSongs:', seedSongs)

  const numBatches = Math.floor(total.length / MAX_BATCH_LENGTH) + 1;
  for (let i = 0; i < numBatches; i++) {
    batches.push(total.slice(MAX_BATCH_LENGTH * i, MAX_BATCH_LENGTH * i + MAX_BATCH_LENGTH));
  }

  const topVectors = (await Promise.all(batches.map(async (batch) => {
    const ids = batch.map(({ id }) => id).join(',');

    const response = (await axios.get(
      `https://api.spotify.com/v1/audio-features?ids=${ids}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    )).data;

    // console.log('audio features:', response)

    return response
      .audio_features
      .map((feature) => {
        delete feature.analysis_url;
        delete feature.id;
        delete feature.track_href;
        delete feature.type;
        delete feature.uri;
        delete feature.duration_ms
        delete feature.key
        delete feature.time_signature
        delete feature.mode
        // delete feature.tempo

        features = Object.keys(feature);

        return Object.values(feature);
      })
  }))).flat();

  let featuresMaximums = Array(features.length).fill([])
  for (const vector of topVectors) {
    for (let i = 0; i < vector.length; i++) {
      featuresMaximums[i] = [...featuresMaximums[i], Math.abs(vector[i])];
    }
  }

  featuresMaximums = featuresMaximums.map((feature) => Math.max(...feature));

  topVectorsNormalized = topVectors.map((vector) => vector.map((value, index) => Math.abs(value) / featuresMaximums[index]))

  // console.log('topTracks: ', topTracks)

  console.log('features: ', features);

  const sets = [];

  // For each song A
  for (let i = 0; i < total.length; i++) {
    // If A not in a set, make new set with only A
    let curTrack = total[i];
    let curVector = topVectorsNormalized[i];
    let curTrackSetIndex = whichSetContains(sets, curTrack.id);

    if (curTrackSetIndex === -1) {
      sets.push(new Set([curTrack.id]));
      curTrackSetIndex = sets.length - 1;
    }

    // For each song B
    for (let j = i + 1; j < total.length; j++) {
      let compareTrack = total[j];
      let compareVector = topVectorsNormalized[j];

      const cosSimilarity = distance(curVector, compareVector)
      console.log('cosSimilarity: ', cosSimilarity, curTrack.name, compareTrack.name, curVector, compareVector)

      if (cosSimilarity < 0.5)  {
        let compareTrackSetIndex = whichSetContains(sets, compareTrack.id);

        console.log('compareTrackSetIndex: ', curTrackSetIndex, compareTrackSetIndex)

         //  1. If B is in a set, combine B’s set and A’s set
        //  2. If B not in a set, add B to that A’s set
        if (compareTrackSetIndex === -1) {
          sets[curTrackSetIndex].add(compareTrack.id);
        } else if (compareTrackSetIndex !== curTrackSetIndex) {
          // Add B's set to A's set
          for (const elem of sets[compareTrackSetIndex]) {
            sets[curTrackSetIndex].add(elem)
          }
          
          // Delete B's set
          sets.splice(compareTrackSetIndex, 1);

          // Get combined set index again because it could have changed
          curTrackSetIndex = whichSetContains(sets, curTrack.id);
        }
      }
    }
  }

  sets.map((set, index) => {
    console.log(`set ${index}`);
    console.log('songs: ',
      Array.from(set).map((id) => total.find((track) => track.id === id).name)
    )
  })
  
  // 5. Rank sets by how many user’s represented in the set
  const scores = sets.map((set) => getSetScore(set, total, users));
  console.log('scores: ', scores);

  // 6. Get recommendations for the average of the highest ranking sets
  const highScoreIndex = scores.findIndex((score) => score === Math.max(...scores));
  const highScoreSet = sets[highScoreIndex];

  const highScoreTrackIds = Array.from(highScoreSet);
  const highScoreTracks = highScoreTrackIds.map((trackId) => total.find(({ id }) => id === trackId));

  let centroid = Array(topVectors[0].length).fill(0);

  for (const trackId of highScoreTrackIds) {
    const trackIndex = total.findIndex(({ id }) => trackId === id)
    const vector = topVectors[trackIndex];
    centroid = centroid.map((val, index) => val + vector[index]);
  }

  centroid = centroid.map((val) => val / highScoreTrackIds.length);

  const random5 = highScoreTrackIds
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0,5);

  let url = `https://api.spotify.com/v1/recommendations?limit=100&seed_artists=&seed_genres=&seed_tracks=${random5.join(',')}`;
  for (let i = 0; i < features.length; i++) {
    url += `&target_${features[i]}=${centroid[i]}`
  }

  console.log(url);
  const response = (await axios.get(
    url,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      }
    }
  )).data;

  console.log('rec response', response);

  // Get recommendations from seed songs
  const generatedFromSeed = (await Promise.all([
    ...seedSongs.map((song) => ({ song, source: 'seed' })),
  ].map(async ({ song, source }) => {
    const response = (await axios.get(
      `https://api.spotify.com/v1/recommendations?limit=100&seed_artists=&seed_genres=&seed_tracks=${song.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    )).data;

    return [
      ...response.tracks.slice(0, source === 'seed' ? 80 : 2),
      song,
    ]
  })))
    .flat();

  return [...response.tracks, ...highScoreTracks, ...seedSongs, ...generatedFromSeed]
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0,limit);
}

export default theAlgorithm;