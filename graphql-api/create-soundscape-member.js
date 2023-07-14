import { API } from 'aws-amplify';
import { createSoundscapeMember as createSoundscapeMemberApi } from '../graphql/mutations';

async function createSoundscapeMember(soundscapeMember) {
  console.log(`creating soundscape member`);

  try {
    const response = (await API.graphql({
      query: createSoundscapeMemberApi,
      variables: {
        input: soundscapeMember,
      },
    }));

    if (!response.data.createSoundscapeMember) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to create soundscape member', err);
  }
}

export default createSoundscapeMember;
