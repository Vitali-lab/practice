import { transfotmPost } from "../transformers/transform-post";

export const getPost = async (postId) =>
  fetch(`http://localhost:3000/posts/${postId}`)
    .then((res) => {
      if (res.ok) {
        return res;
      }

      const error =
        res.status === Number(404)
          ? "Пост не найден"
          : "Что-то пошло не так. Попробуйте позже";

      return Promise.reject(error);
    })
    .then((loadedPost) => loadedPost.json())
    .then((loadedPost) => loadedPost && transfotmPost(loadedPost));
