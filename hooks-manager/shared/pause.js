import axios from 'axios';

export default async function funcPause(
  spotifyAccessToken,
) {
  if (!spotifyAccessToken) {
    return;
  }

  await axios.put(
    'https://api.spotify.com/v1/me/player/pause',
    {},
    {
      headers: {
        Authorization: `Bearer ${spotifyAccessToken}`,
      }
    }
  );
}
