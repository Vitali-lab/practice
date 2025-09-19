import { getPost } from "../api/get-post";
import { getComments } from "../api/get-comments";

export const fetchPost = async (postId) => {
  const post = await getPost(postId);

  const comments = await getComments(postId);

  return {
    error: null,
    res: { ...post, comments },
  };
};
