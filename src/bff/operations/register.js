import { getUser } from "../api/get-user";
import { createUser } from "../api/create-user";
import { sessions } from "../sessions";

export const register = async (redLogin, redPassword) => {
  const existedUser = await getUser(redLogin);

  if (existedUser) {
    return {
      error: "Такой логин уже зарегистрирован",
      res: null,
    };
  }

  const user = await createUser(redLogin, redPassword);

  return {
    error: null,
    res: {
      id: user.id,
      login: user.login,
      roleId: user.role_id,
      session: sessions.create(user),
    },
  };
};
