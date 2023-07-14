import { API } from 'aws-amplify';
import { refreshSpotifyAccessToken as refreshSpotifyAccessTokenMutation} from '../graphql/mutations';

async function refreshSpotifyAccessToken({
    owner,
}) {
  console.log(`refreshing spotify tokens`, owner);

  try {
    const response = (await API.graphql({
      query: refreshSpotifyAccessTokenMutation,
      variables: {
        input: {
            owner,
        },
      },
    }));

    if (!response.data.refreshSpotifyAccessToken) {
      throw new Error('response was null');
    }

    const data = response.data.refreshSpotifyAccessToken;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to refresh spotify tokens', err);
  }
}

export default refreshSpotifyAccessToken;
