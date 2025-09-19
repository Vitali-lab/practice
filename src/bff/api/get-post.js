import { transfotmPost } from "../transformers/transform-post";

export const getPost = async (postId) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transfotmPost(loadedPost));
