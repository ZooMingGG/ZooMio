import { SIGN_UP } from "../actionTypes";

const initialState = {
  isAuthenticated: false,
  userData: {}
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return {
        ...state,
        userData: action.payload,
        isAuthenticated: true
      }
    default:
      return state;
  }
}

export { userReducer };
