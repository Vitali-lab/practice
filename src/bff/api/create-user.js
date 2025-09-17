export const createUser = (login, password) =>
  fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
      registered_at: new Date()
        .toISOString()
        .substring(0, 16)
        .replace("T", " "),
      role_id: 2,
    }),
  }).then((createdUser) => createdUser.json());
