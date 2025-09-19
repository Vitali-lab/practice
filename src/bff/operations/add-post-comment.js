import { sessions } from "../sessions";
import { addComment, getComments } from "../api";
import { ROLE } from "../constants";

export const addPostComment = async (userSession, userId, postId, content) => {
  const accessRoles = [ROLE.ADMIN, ROLE.MODERATOR, ROLE.READER];

  if (!sessions.access(userSession, accessRoles)) {
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
