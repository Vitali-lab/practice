
import { Icon, Input } from "../../../../components"
import { SpecialPanel } from "../special-panel/SpecialPanel"
import { useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { savePostAsync } from "../../../../actions"
import { useServerRequest } from "../../../../hooks"
import { removePostAsync } from "../../../../actions"
import { Modal } from "../../../../components"
import { sanitizeContent } from "./utils"
import styled from "styled-components"

const PostFormContainer = ( {className, post:{id , title , imageUrl , content, publishedAt} } ) => {


    const imageRef = useRef(null)
    const titleRef = useRef(null)
    const contentRef = useRef(null) 
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const requestServer = useServerRequest()
    const [onOpenModal, setOnOpenModal] = useState(false)

    const onSave = () => {
        const newImageUrl = imageRef.current.value
        const newTitle = titleRef.current.value
        const newContent = sanitizeContent(contentRef.current.innerHTML)  
        dispatch(savePostAsync(requestServer, {
            id, 
            imageUrl: newImageUrl, 
            title: newTitle, 
            content: newContent
        })
    ).then(({ id }) => {
        navigate(`/post/${id}`)
    })
    }

       
    
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
                        text={"Вы действительно хотите удалить статью?"}/>
                            }
            Изоображение:
            <Input ref={imageRef} defaultValue={imageUrl} />
            Заголовок:
            <Input ref={titleRef} defaultValue={title} />
            <SpecialPanel publishedAt={publishedAt} onDeleteButton={openModal} editButton={<Icon 
            id="floppy-o" 
            color = "#070707ff" 
            size = "25"
            onClick={onSave} />}/>
            Содержимое статьи:
            <div 
            ref={contentRef}
            contentEditable={true}
            suppressContentEditableWarning={true} className="post-text">
            {content}
            </div>
        </div>
    )

}

export const PostForm = styled(PostFormContainer)`
 & img {
  float: left;
  margin: 0px 40px 20px 0;
  border-radius: 10px;
  width: 30%;
  
 }
  & .post-text{
    white-space: pre-line;
    border: 1px solid #313131ff;
    padding: 10px;
    border-radius: 10px;
    color:rgb(0, 0, 0);
    background-color:  #cbcaffef;
    font-size: 18px;
    min-height: 110px;
    
  }
   
 
  `
