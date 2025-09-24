import { getSessions, deleteSession, addSession,  } from "./api";

export const sessions = {


  create(user) {
    const hash = Math.random().toFixed(50);

    
    addSession(hash,user);
    return hash;
  },

  async remove(hash) {
    const session = await getSessions(hash);
    if(!session) {
      return;
    }
    
    
    deleteSession(session.id);
    
  },
  async access(hash, accessRoles) {
    const session = await getSessions(hash);

    return !!session.user && accessRoles.includes(session.user.role_id);
  },
};
