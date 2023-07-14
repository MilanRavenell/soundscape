import { API } from 'aws-amplify';
import { deleteSeedTrack as deleteSeedTrackApi } from '../graphql/mutations';

async function deleteSeedTrack(seedTrack) {
  console.log(`deleting seed track`);

  try {
    const response = (await API.graphql({
      query: deleteSeedTrackApi,
      variables: {
        input: seedTrack,
      },
    }));

    if (!response.data.deleteSeedTrack) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to delete seed track', err);
  }
}

export default deleteSeedTrack;
