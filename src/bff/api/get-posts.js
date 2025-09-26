import { transfotmPost } from "../transformers";
export const getPosts = (page , limit) =>
    fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
    .then((loadedPosts) => Promise.all([loadedPosts.json(), loadedPosts.headers.get('X-Total-Count')]))
    .then(([loadedPost,total]) =>  ({
        posts: loadedPost && loadedPost.map(transfotmPost),
        total:Number(total)
    })
)