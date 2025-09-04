export const createUser = (redLogin, redPassword) =>
  fetch("http://localhost:3005/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login: redLogin,
      password: redPassword,
      registered_at: new Date()
        .toISOString()
        .substring(0, 16)
        .replace("T", " "),
      role_id: 2,
    }),
  });
