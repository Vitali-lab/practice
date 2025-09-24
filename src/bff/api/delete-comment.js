

export const deleteComment = async( id) =>
 await fetch(`http://localhost:3000/comments/${id}`, {
        method: "DELETE",
    })
