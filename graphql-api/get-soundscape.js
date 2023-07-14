import { API } from 'aws-amplify';
import { getSoundscape as getSoundscapeApi } from '../graphql/queries';

async function getSoundscape(
  soundscapeId,
) {
  console.log('getting soundscape');

  try {
    const response = (await API.graphql({
      query: getSoundscapeApi,
      variables: {
        id: soundscapeId,
      },
    }));

    const data = response.data.getSoundscape;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to get soundscape', err);
    return null;
  }
}

export default getSoundscape;
