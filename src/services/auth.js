import { auth } from './firebase';

// eslint-disable-next-line import/prefer-default-export
export const login = async (email, password) => {
  let [response, error] = [null, null];
  try {
    response = await auth.signInWithEmailAndPassword(email, password);
  } catch (err) {
    throw err;
  }

  if (response) {
    return response;
  }
  return error;
};

export const currentUser = () => auth.currentUser;
 