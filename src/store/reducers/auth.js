import * as actionTypes from '../actions/actionsTypes';

const initialState = {
  token : null,
  userId: null,
  error: null,
  loading: false,
  authRedirect : '/',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.idToken,
        userId: action.userId,
        error: null,
        loading: false,
      }
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false,
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
      }
    case actionTypes.SET_AUTH_REDIRECT:
      return {
        ...state,
        authRedirect: action.path
      }
    default:
      return state;
  }
}

export default reducer;