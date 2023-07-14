import { API } from 'aws-amplify';
import { createSoundscape as createSoundscapeApi } from '../graphql/mutations';

async function createSoundscape(soundscape) {
  console.log(`creating soundscape`);
  console.log('new: ', soundscape)

  try {
    const response = (await API.graphql({
      query: createSoundscapeApi,
      variables: {
        input: soundscape,
      },
    }));

    if (!response.data.createSoundscape) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to create soundscape', err);
  }
}

export default createSoundscape;
