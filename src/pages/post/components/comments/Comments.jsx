import { useState } from "react"
import { Comment } from "./components/Comment"
import { Icon } from "../../../../components/Icon/Icon"
import { useDispatch, useSelector } from "react-redux" 
import { selectUserId  } from "../../../../selectors"  
import { useServerRequest } from "../../../../hooks"
import { addCommentAsync } from "../../../../actions"
import styled from "styled-components"

const CommentsContainer = ({className , comments, postId , content }) => {

    const [newComment, setNewComment] = useState('')

    const userId = useSelector(selectUserId)
    const dispatch = useDispatch()
    const reqestServer = useServerRequest()

    const onNewCummentAdd = ( userId ,postId, content ) => { 
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
            onClick={()=>{onNewCummentAdd(userId ,postId, content)}} />
        </div>
        <div className="comments">
            {comments.map(( {id , author , content,publishedAt, newComment} )=> (
              <Comment 
              key={id}
              id={id} 
              author={author} 
              content={content}
              publishedAt={publishedAt}
              />
            ))}
        </div>
    </div>
)

}

export const Comments = styled(CommentsContainer)`

display: flex;
align-items: center;
justify-content: center;
flex-direction: column;


& .new-comment {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px 0 0 0;
  width: 580px;
  & textarea {
    width: 100%;
    height: 120px;
    resize: none;
    border-radius: 10px;
    padding: 15px;
    font-size: 18px;
    
   
  }
}
`