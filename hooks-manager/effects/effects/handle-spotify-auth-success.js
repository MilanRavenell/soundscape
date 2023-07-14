import { v4 as uuidv4 } from 'uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function handleSpotifyAuthSucess({
  state,
  context,
  useEffect,
  setState,
  spotifyAuthResponse,
}) {
  useEffect(() => {
    (async () => {
      if (spotifyAuthResponse?.type === 'success') {
        console.log('spotifyAuthResponse: ', spotifyAuthResponse);
        const { code } = spotifyAuthResponse.params;
  
        const response = await context.api.handleSpotifyAuthCode({
          code,
          redirectUri: context.domain,
        });

        if (!response) {
          console.error('exchange token response was null');
          return;
        }

        const { accessToken , user } = response;
  
        await AsyncStorage.setItem('@app:spotifyId', user.owner);
  
        console.log('access token: ', code);
        setState('user', user)
        setState('spotifyAccessToken', accessToken);
        setState('accessTokenValid', true);
      }
    })();
  }, [spotifyAuthResponse]);
}
