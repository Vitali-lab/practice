const initialPostsState = {};

export const postsReduser = (state = initialPostsState, action) => {
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
