import axios from 'axios';

export default function getSpotifyUser({
  state,
  setState,
  useEffect,
}) {
  const spotifyAccessToken = state.spotifyAccessToken;

  useEffect(() => {
    (async () => {
      console.log('testing access token...')
      try {
        const userResponse = await axios.get(
          'https://api.spotify.com/v1/me',
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          },
        );

        const topSongsResponse = await axios.get(
          'https://api.spotify.com/v1/me/top/tracks',
          {
            headers: {
              Authorization: `Bearer ${spotifyAccessToken}`,
            }
          },
        )

        const userData = userResponse.data;
        const topSongsData = topSongsResponse.data;

        const user = {
          name: userData.display_name,
          profPicUrl: userData.images[0].url,
          topSongs: topSongsData.items,
        };

        console.log('user: ', user);

        setState('accessTokenValid', true);
        setState('loginDialogOpen', false);
        setState('user', user);

      } catch (err) {
        console.log(err)
        if (err?.response?.status === 401) {
          console.log('helloooo')
          setState('accessTokenValid', false);
        }

        await new Promise(r => setTimeout(r, 500));
        setState('loginDialogOpen', true);
      }
    })()
  }, [spotifyAccessToken]);
}
