import { updatePost , createPost } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const savePost = async (hash, newPostData) => {
  const accessRoles = [ROLE.ADMIN];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  const savedPosts = newPostData.id === ''? await createPost(newPostData) :await updatePost(newPostData);
  return {
    error: null,
    res: savedPosts,
  };
}; 