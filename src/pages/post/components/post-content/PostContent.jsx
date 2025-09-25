import { Icon , Modal } from "../../../../components"
import { SpecialPanel } from "../special-panel/SpecialPanel"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { removePostAsync } from "../../../../actions" 
import { useServerRequest } from "../../../../hooks"
import styled from "styled-components"

const PostContentContainer = ( {className, post:{id , title , imageUrl , content, publishedAt} } ) => {


  const navigate = useNavigate()
  const dispatch = useDispatch()
  const requestServer = useServerRequest()
  const [onOpenModal, setOnOpenModal] = useState(false)

  
     const openModal = () => {
                  setOnOpenModal(true)
              }
              const onRemovePost =  ( id ) => {
                    setOnOpenModal(false)
                    dispatch(removePostAsync(requestServer, id))
                    navigate("/")
              }
    

    return( 
        <div className={className}>
          {onOpenModal && <Modal 
            id={id} 
            cancel={setOnOpenModal} 
            confirm={onRemovePost} 
            text={"Вы действительно хотите удалить пост?"}/>
                }
            <img src={imageUrl || " "} alt={title}/>
            <h2>{title}</h2>
            <SpecialPanel publishedAt={publishedAt} onDeleteButton={openModal} editButton={<Icon 
            id="pencil-square-o" 
            color = "#070707ff" 
            size = "25"
            onClick={() => navigate(`/post/${id}/edit`)} />}/>
            <div className="post-text">
            {content}
            </div>
        </div>
    ) 

}

export const PostContent = styled(PostContentContainer)`
 & img {
  float: left;
  margin: 0px 40px 20px 0;
  border-radius: 10px;
  width: 30%;
  
 }
   & .post-text{
    white-space: pre-line;
  }

  `