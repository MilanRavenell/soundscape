import { API } from 'aws-amplify';
import { updateSoundscape } from '../graphql/mutations';

async function modifySoundscape(soundscape) {
  console.log(`modifying soundscape`);

  try {
    const response = (await API.graphql({
      query: updateSoundscape,
      variables: {
        input: soundscape,
      },
    }));

    if (!response.data.updateSoundscape) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to modify soundscape', err);
  }
}

export default modifySoundscape;
