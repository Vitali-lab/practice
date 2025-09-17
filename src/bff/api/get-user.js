import { transfotmUser } from "../transformers";

export const getUser = async (loginToFind) =>
  fetch(`http://localhost:3000/users?login=${loginToFind}`)
    .then((loadedUser) => loadedUser.json())
    .then(([loadedUser]) => loadedUser && transfotmUser(loadedUser));
