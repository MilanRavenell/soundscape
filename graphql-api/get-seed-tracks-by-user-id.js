import { API } from 'aws-amplify';
import { seedTracksByUserId } from '../graphql/queries';

async function getSeedTracksByUserId(
  userId,
) {
  console.log('getting seed tracks by user id');

  try {
    const response = (await API.graphql({
      query: seedTracksByUserId,
      variables: {
        userId,
      },
    }));

    const data = response.data.seedTracksByUserId;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get seed tracks by user id', err);
    return null;
  }
}

export default getSeedTracksByUserId;
