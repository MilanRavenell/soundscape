import axios from 'axios';
import rateLimit from 'axios-rate-limit';

const http = rateLimit(
  axios.create(),
  { maxRequests: 5000, perMilliseconds: 100, maxRPS: 2 }
);

const theAlgorithm = async (seedSongs, topTrackIds, limit, accessToken) => {
  return (await Promise.all([
    ...seedSongs.map((song) => ({ song, source: 'seed' })),
    ...topTrackIds.map((song) => ({ song, source: 'top' })),
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
    .flat()
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
    .slice(0,limit);
}

export default theAlgorithm;