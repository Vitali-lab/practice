const initialPostState = {};

export const postReduser = (state = initialPostState, action) => {
  switch (action.type) {
    case "AUTH": {
      return {
        ...state,
        isAuth: action.isAuth,
        user: action.user,
        serverError: action.serverError,
      };
    }
    default:
      return state;
  }
};
