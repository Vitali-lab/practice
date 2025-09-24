import { useState } from "react"
import { Comment } from "./components/Comment"
import { Icon } from "../../../../components/Icon/Icon"
import { useDispatch, useSelector } from "react-redux" 
import { selectUserId  } from "../../../../selectors"  
import { useServerRequest } from "../../../../hooks"
import { addCommentAsync } from "../../../../actions"
import styled from "styled-components"
import { addComment } from "../../../../bff/api"

const CommentsContainer = ({className , comments, postId , content, author }) => {

    const [newComment, setNewComment] = useState('')

    const userId = useSelector(selectUserId)
    const dispatch = useDispatch()
    const reqestServer = useServerRequest()

    const onNewCummentAdd =  ( userId ,postId, content ) => { 
      setNewComment('')
      dispatch(addCommentAsync(reqestServer,userId ,postId, content))
    }
 
 
return ( 
    <div className={className}>
        <div className="new-comment">
            <textarea 
            value={newComment} 
            placeholder="Комментарий..."
            onChange = {({target}) => {setNewComment(target.value)} }></textarea>
            <Icon 
            id="paper-plane-o" 
            color = "#070707ff" 
            size = "25"
            onClick={()=>{onNewCummentAdd(userId ,postId, newComment)}} />
        </div>
        <div className="comments">
            {comments.map(( {id , author , content, published_at,  } )=> (
              <Comment 
              key={id}
              id={id} 
              author={author} 
              content={content}
              publishedAt={published_at}
              postId={postId}
              
              />
            ))}
        </div>
    </div>
)

}

export const Comments = styled(CommentsContainer)`

display: flex;
align-items: start;
justify-content: center;
flex-direction: column;



& .new-comment {
  display: flex;
  align-items: start;
  justify-content: center;
  gap: 20px;
  margin: 40px 0 0 0;
  width: 100%;
  margin-bottom: 25px;
  
  & textarea {
    width: 100%;
    height: 170px;
    resize: none;
    border-radius: 10px;
    color:rgb(0, 0, 0);
    background-color:  #cbcaffef;
    padding: 15px;
    font-size: 18px;
    border: 1px solid #313131ff;
    
    
   
  }
    & i {
      color: #070707ff;
      border-radius: 10px;
      border: 1px solid #070707ff;
      padding: 10px;
      
      

  }
}
`