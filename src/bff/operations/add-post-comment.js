import { sessions } from "../sessions";
import { addComment, getComments, getPost } from "../api";
import { ROLE } from "../constants";

export const addPostComment = async (hash, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  const access = await sessions.access(hash, accessRoles);
  if (!access) {
    return {
      error: "Доступ запрещён",
      res: null,
    };
  }

  await addComment(userId, postId, content);

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
