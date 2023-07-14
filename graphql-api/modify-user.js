import { API } from 'aws-amplify';
import { updateUser } from '../graphql/mutations';

async function modifyUser(user) {
  console.log(`modifying user`);

  try {
    const response = (await API.graphql({
      query: updateUser,
      variables: {
        input: user,
      },
    }));

    if (!response.data.updateUser) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to modify user', err);
  }
}

export default modifyUser;
