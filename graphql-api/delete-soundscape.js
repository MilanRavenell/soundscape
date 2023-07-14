import { API } from 'aws-amplify';
import { deleteSoundscape as deleteSoundscapeApi } from '../graphql/mutations';

async function deleteSoundscape(soundscape) {
  console.log(`deleting soundscape`);
  console.log('new: ', soundscape)

  try {
    const response = (await API.graphql({
      query: deleteSoundscapeApi,
      variables: {
        input: soundscape,
      },
    }));

    if (!response.data.deleteSoundscape) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to delete soundscape', err);
  }
}

export default deleteSoundscape;
