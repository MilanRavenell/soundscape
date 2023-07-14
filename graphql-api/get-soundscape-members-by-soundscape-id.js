import { API } from 'aws-amplify';
import { soundscapeMemberBySoundscapeId } from '../graphql/queries';

async function getSoundscapeMembersBySoundscapeId(
  soundscapeId,
) {
  console.log('getting soundscape members by soundscape id');

  try {
    const response = (await API.graphql({
      query: soundscapeMemberBySoundscapeId,
      variables: {
        soundscapeId,
      },
    }));

    const data = response.data.soundscapeMemberBySoundscapeId;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get soundscape members by soundscape id', err);
    return null;
  }
}

export default getSoundscapeMembersBySoundscapeId;
