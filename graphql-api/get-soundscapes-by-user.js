import { API } from 'aws-amplify';
import { getSoundscapesByUser as getSoundscapesByUserApi } from '../graphql/queries';

async function getSoundscapesByUser(
  userId,
) {
  console.log('getting soundscapes for user');

  try {
    const response = (await API.graphql({
      query: getSoundscapesByUserApi,
      variables: {
        userId,
      },
    }));

    const data = response.data.getSoundscapesByUser;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get soundscapes for user', err);
    return null;
  }
}

export default getSoundscapesByUser;
