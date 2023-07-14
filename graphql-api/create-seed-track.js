import { API } from 'aws-amplify';
import { createSeedTrack as createSeedTrackApi } from '../graphql/mutations';

async function createSeedTrack(seedTrack) {
  console.log(`creating seed track`);

  try {
    const response = (await API.graphql({
      query: createSeedTrackApi,
      variables: {
        input: seedTrack,
      },
    }));

    if (!response.data.createSeedTrack) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to create seed track', err);
  }
}

export default createSeedTrack;
