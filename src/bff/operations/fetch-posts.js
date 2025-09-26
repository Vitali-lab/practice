import { getPosts , getComments } from "../api";
import { getCommentsCount } from "../utils/get-comments-count";


export const fetchPosts = async (page , limit ) => {



    const [{posts, total} , comments] = await Promise.all([
        getPosts(page , limit),
        getComments(),
    ])
    console.log(total);
    
 


  return {
    error: null,
    res:{ posts:posts.map((post)=> ({
        ...post,
        commentsCount:getCommentsCount(comments, post.id)
    })),
    total}
  };
};