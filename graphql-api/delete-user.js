import { API } from 'aws-amplify';
import { deleteUser as deleteUserApi } from '../graphql/mutations';

async function deleteUser(owner) {
  console.log(`deleting user`);

  try {
    const response = (await API.graphql({
      query: deleteUserApi,
      variables: {
        input: {
            owner
        },
      },
    }));

    if (!response.data.deleteUser) {
      throw new Error('response was null');
    }
  } catch (err) {
    console.error('Failed to delete user', err);
  }
}

export default deleteUser;
