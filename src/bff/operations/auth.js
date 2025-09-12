import { getUser } from "../api";
import { sessions } from "../sessions";

export const auth = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  const { id, login, role_id: roleId, password } = user;

  if (!user) {
    return {
      error: "такой пользователь не найден",
      res: null,
    };
  }

  if (authPassword !== password) {
    return {
      error: "неверный пароль",
      res: null,
    };
  }

  return {
    error: null,
    res: {
      id,
      login,
      roleId,
      session: sessions.create(user),
    },
  };
};
