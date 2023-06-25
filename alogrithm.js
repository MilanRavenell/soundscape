import axios from 'axios';

const theAlgorithm = async (seedSongs, topSongs, limit, accessToken) => {
  return (await Promise.all([
    ...seedSongs.map((song) => ({ song, source: 'seed' })),
    ...topSongs.map((song) => ({ song, source: 'top' })),
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
      ...response.tracks.slice(0, source === 'seed' ? 10 : 2),
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