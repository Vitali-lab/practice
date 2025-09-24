import { transformSession } from "../transformers";

export const getSessions = async (hash) =>
  fetch(`http://localhost:3000/sessions?hash=${hash}`)
    .then((loadedSession) => loadedSession.json())
    .then(([loadedSession]) => loadedSession && transformSession(loadedSession));
