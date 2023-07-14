import { API } from 'aws-amplify';
import { seedTracksBySoundscapeIdAndUserId } from '../graphql/queries';

async function getSeedTracksBySoundscapeId(
  soundscapeId,
) {
  console.log('getting seed tracks by soundscape id');

  try {
    const response = (await API.graphql({
      query: seedTracksBySoundscapeIdAndUserId,
      variables: {
        soundscapeId,
      },
    }));

    const data = response.data.seedTracksBySoundscapeIdAndUserId;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get seed tracks by soundscape id', err);
    return null;
  }
}

export default getSeedTracksBySoundscapeId;
