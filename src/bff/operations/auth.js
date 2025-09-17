import { getUser } from "../api";
import { sessions } from "../sessions";

export const auth = async (authLogin, authPassword) => {
  const user = await getUser(authLogin);

  const { id, login, password, role_id } = user;

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
      id: id,
      login: login,
      roleId: role_id,
      session: sessions.create(user),
    },
  };
};
