import { setUserRole } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const updateUserRole = async (hash, userId, newUserRole) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  setUserRole(userId, newUserRole);
  return {
    error: null,
    res: true,
  };
};
