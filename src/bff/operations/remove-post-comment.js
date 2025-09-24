import { sessions } from "../sessions";
import { deleteComment, getComments, getPost } from "../api";
import { ROLE } from "../constants";

export const removePostComment = async (hash, postId, id) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await deleteComment(id);

  const post = await getPost(postId);

  const comments = await getComments(postId);

  if (!post) {
    return {
      error: "Пост не найден",
      res: null,
    };
  }

  return {
    error: null,
    res: { ...post, comments },
  };
};