import axios from 'axios';

const theAlgorithm = async (songs, accessToken) => {
  return (await Promise.all(songs.map(async (song) => {
    const response = (await axios.get(
      `https://api.spotify.com/v1/recommendations?limit=100&seed_artists=&seed_genres=&seed_tracks=${song.id}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        }
      }
    )).data;

    return response.tracks
  })))
    .flat()
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
}

export default theAlgorithm;