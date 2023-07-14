import { API } from 'aws-amplify';
import { getUser as getUserApi } from '../graphql/queries';

async function getUser(
  spotifyId,
) {
  console.log('getting user');

  try {
    const response = (await API.graphql({
      query: getUserApi,
      variables: {
        owner: spotifyId,
      },
    }));

    const data = response.data.getUser;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get user', err);
    return null;
  }
}

export default getUser;
