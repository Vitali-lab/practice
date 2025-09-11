import { getUser } from "./get-user";
import { createUser } from "./create-user";
import { sessions } from "./sessions";

export const server = {
  async logout(session) {
    sessions.remove(session);
  },
  async auth(authLogin, authPassword) {
    const user = await getUser(authLogin);

    if (!user) {
      return {
        error: "такой пользователь не найден",
        res: null,
      };
    }

    if (authPassword !== user.password) {
      return {
        error: "неверный пароль",
        res: null,
      };
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    };
  },
  async register(redLogin, redPassword) {
    const user = await getUser(redLogin);

    if (user) {
      return {
        error: "Такой логин уже зарегистрирован",
        res: null,
      };
    }

    await createUser(redLogin, redPassword);

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    };
  },
};
