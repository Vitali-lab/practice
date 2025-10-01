import { Icon } from "../../../../../components/Icon/Icon"
import { useDispatch } from "react-redux"
import { useState } from "react"
import { Modal, Button } from "../../../../../components"
import { removeCommentAsync } from "../../../../../actions"
import { useServerRequest } from "../../../../../hooks"
import { ROLE } from "../../../../../bff/constants/role"
import { checkAccess } from "../../../../../utils/check-access"
import { selectUserRole } from "../../../../../selectors"
import { useSelector } from "react-redux"
import PropTypes from "prop-types";
import styled from "styled-components"


const CommentContainer  = ( {className , id , author , content, publishedAt, postId} ) => {

    const dispatch = useDispatch()
    const requestServer = useServerRequest()
    const [onOpenModal, setOnOpenModal] = useState(false)

    const roleId = useSelector(selectUserRole)
    const isAdminOrModerator = checkAccess([ROLE.ADMIN, ROLE.MODERATOR], roleId);



    const onRemoveComment =  ( id ) => { 
          setOnOpenModal(false)
          dispatch(removeCommentAsync(requestServer, postId, id))
        }

    return( 
        <div className={className} key={id}>
            {onOpenModal && <Modal 
            id={id} 
            cancel={setOnOpenModal} 
            confirm={onRemoveComment} 
            text={"Вы действительно хотите удалить комментарий?"}/>
                }
            <div className="comment">
            <div className="info-panel">
                <div className="author">
                    <Icon 
                    id = "user-circle-o"
                    color = "rgb(0, 0, 0)"/>
                    {author}</div>
                <div className="publishedAt">
                    <Icon 
                    id = "calendar-o"
                    color = "rgb(0, 0, 0)"/>
                    {publishedAt}</div>
            </div>
            <div className="content">{content}</div>
            </div>
            {isAdminOrModerator && <Icon id="trash-o" color = "rgba(173, 8, 8, 1)" size = "25" onClick={() => setOnOpenModal(true)}/>}
            
        </div>
    )
}



export const Comment = styled(CommentContainer)`
display: flex;
width: 900px;
flex-direction: row;
align-items: start;
justify-content: center;
gap: 20px;
color: #ffffffff;
padding: 5px 0;
& .comment {
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
border-radius: 10px;
border: 1px solid #313131ff;
min-width: 580px;
background-color: #cbcaffef;
color:rgb(0, 0, 0);
padding: 10px;  
}

& .info-panel { 
width: 100%;
display: flex;
align-items: center;     
justify-content: space-between;
gap: 20px;
}
& .publishedAt {
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 10px;    
}
& .content {
        width: 100%;
        text-align: left;
        padding: 15px;
       
}
& .author {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 10px;
        font-weight: bold;
    }



`

Comment.propTypes = {
    id: PropTypes.number,
    author: PropTypes.string,
    content: PropTypes.string,
    publishedAt: PropTypes.string,
    postId: PropTypes.number
}   