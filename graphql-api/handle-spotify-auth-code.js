import { API } from 'aws-amplify';
import { handleSpotifyAuthCode as handleSpotifyAuthCodeMutation} from '../graphql/mutations';

async function handleSpotifyAuthCode({
    code,
    redirectUri,
}) {
  console.log(`exchanging spotify tokens`, code, redirectUri);

  try {
    const response = (await API.graphql({
      query: handleSpotifyAuthCodeMutation,
      variables: {
        input: {
            code,
            redirectUri,
        },
      },
    }));

    if (!response.data.handleSpotifyAuthCode) {
      throw new Error('response was null');
    }

    const data = response.data.handleSpotifyAuthCode;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to exchange spotify token', err);
  }
}

export default handleSpotifyAuthCode;
