import { SIGN_UP } from "../actionTypes"

const signUp = userData => {
  return {
    type: SIGN_UP,
    payload: userData
  }
};

export { signUp };
