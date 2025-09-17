import { transfotmUser } from "../transformers";
export const getUsers = () =>
  fetch("http://localhost:3000/users").then((loadedUsers) =>
    loadedUsers.json().then((loadedUsers) => loadedUsers.map(transfotmUser))
  );
