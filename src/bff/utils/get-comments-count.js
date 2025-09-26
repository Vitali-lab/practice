
export const getCommentsCount = (comments = [] , postId) => {

  return  comments.filter((comment) => comment.post_id === postId).length 


};