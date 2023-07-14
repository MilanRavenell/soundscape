import { API } from 'aws-amplify';
import { deleteSoundscapeMember as deleteSoundscapeMemberApi } from '../graphql/mutations';

async function deleteSoundscapeMember(soundscapeMember) {
  console.log(`deleting soundscape member`);

  try {
    const response = (await API.graphql({
      query: deleteSoundscapeMemberApi,
      variables: {
        input: soundscapeMember,
      },
    }));
  } catch (err) {
    console.error('Failed to delete soundscape member', err);
  }
}

export default deleteSoundscapeMember;
