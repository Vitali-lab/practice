import { getUser } from "./get-user";
import { createUser } from "./create-user";
import { createSession } from "./create-session";

export const server = {
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
      res: createSession(user.role_id),
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
      res: createSession(user.role_id),
    };
  },
};
