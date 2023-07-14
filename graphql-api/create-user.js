import { API } from 'aws-amplify';
import { createUser as createUserApi } from '../graphql/mutations';

async function createUser(user) {
  console.log(`creating user`);

  try {
    const response = (await API.graphql({
      query: createUserApi,
      variables: {
        input: user,
      },
    }));

    if (!response.data.createUser) {
      throw new Error('response was null');
    }

    const data = response.data.createUser;

    console.log('response: ', data);

    return data ?? null;
  } catch (err) {
    console.error('Failed to create user', err);
  }
}

export default createUser;
