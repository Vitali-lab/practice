import { setPostData } from "./set-post-data";

export const loadPostAsync = (requestServer, postId) => (dispatch) =>
  requestServer("fetchPost", postId).then((res) => {
    if (res.res) {
      dispatch(setPostData(res.res));
    }
    return res;
  });
