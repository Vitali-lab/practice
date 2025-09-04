import { removeComment } from "./session";
import { ROLE } from "./constants/role";
export const createSession = (roleId) => {
  let session = {
    logOut() {
      Object.keys(session).forEach((key) => delete session[key]);
      return {
        error: null,
        res: "Выход осуществлен",
      };
    },
  };
  switch (roleId) {
    case ROLE.ADMIN: {
      session.removeComment = removeComment();
      break;
    }
    case ROLE.MODERATOR: {
      session.removeComment = removeComment();
      break;
    }
    case ROLE.READER: {
      break;
    }
    default:
  }

  return session;
};
