import { Icon } from "../../../../components/Icon/Icon"
import { SpecialPanel } from "../special-panel/SpecialPanel"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const PostContentContainer = ( {className, post:{id , title , imageUrl , content, publishedAt} } ) => {


  const navigate = useNavigate()
    

    return( 
        <div className={className}>
            <img src={imageUrl} alt={title}/>
            <h2>{title}</h2>
            <SpecialPanel publishedAt={publishedAt} editButton={<Icon 
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