const initialUsersState = {
  isAuth: false,
  user: {},
  serverError: null,
};

export const usersReduser = (state = initialUsersState, action) => {
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
