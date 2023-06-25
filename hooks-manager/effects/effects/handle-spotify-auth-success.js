export default function handleSpotifyAuthSucess({
  useEffect,
  setState,
  spotifyAuthResponse,
}) {
  useEffect(() => {
    if (spotifyAuthResponse?.type === 'success') {
      const { access_token } = spotifyAuthResponse.params;
      console.log('access token: ', access_token);
      setState('spotifyAccessToken', access_token);
    }
  }, [spotifyAuthResponse]);
}
