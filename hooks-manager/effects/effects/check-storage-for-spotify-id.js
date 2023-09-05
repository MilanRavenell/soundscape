import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export default function checkStorageForSpotifyId({
  context,
  state,
  useEffect,
  setState,
  }) {
    const spotifyAccessToken = state.spotifyAccessToken;
    
    useEffect(() => {
        (async () => {
          if (context.domain.includes('invite') || spotifyAccessToken) {
            return;
          }
          
          const storedSpotifyId = await AsyncStorage.getItem('@app:spotifyId');
          
          if (storedSpotifyId) {
            try {
              // Get user from dynamo
              const ddbUser = await context.api.getUser(storedSpotifyId);
              
              if (!ddbUser) {
                throw new Error('user does not exist');
              }

              setState('user', ddbUser);

              // Refresh access token
              const { accessToken } = await context.api.refreshSpotifyAccessToken({ owner: ddbUser.owner });
            
              // if doesnt work then show popup
              await axios.get(
                'https://api.spotify.com/v1/me',
                {
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                  }
                },
              );

              setState('spotifyAccessToken', accessToken);
              setState('accessTokenValid', true);
              return;
            } catch (err) {
              console.error('Failed to refresh token', err);
            }
          }

          // show pop up
          await new Promise(r => setTimeout(r, 500));
          setState('loginDialogOpen', true);
        })()
    }, [spotifyAccessToken]);
  }
  