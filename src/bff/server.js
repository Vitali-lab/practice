import {
  auth,
  logout,
  fetchUsers,
  fetchRoles,
  register,
  updateUserRole,
  removeUser,
} from "./operations";

export const server = {
  auth,
  logout,
  register,
  fetchUsers,
  fetchRoles,
  updateUserRole,
  removeUser,
};
