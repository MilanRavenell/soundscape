import axios from 'axios';

export default function funcAddToQueue({
  state,
  useCallback,
}) {
  const spotifyAccessToken = state.spotifyAccessToken;

  return useCallback(
    async (song) => {
      if (!spotifyAccessToken) {
        return;
      }
  
      await axios.post(
        `https://api.spotify.com/v1/me/player/queue?uri=${song.uri}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${spotifyAccessToken}`,
          }
        }
      )
    },
    [spotifyAccessToken]);
}
