import { ACTION_TYPE } from "../actions";

const initialAppState = {
  wasLoguot: false,
};

export const appReduser = (state = initialAppState, action) => {
  switch (action.type) {
    case ACTION_TYPE.LOGOUT: {
      return {
        ...state,
        wasLoguot: !state.wasLoguot,
      };
    }
    default:
      return state;
  }
};
