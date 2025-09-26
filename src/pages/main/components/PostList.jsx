import { useNavigate } from "react-router-dom"
import { Icon } from "../../../components"
import styled from "styled-components";

const PostListContainer = ({ className, post:{id , title , imageUrl , content, publishedAt , commentsCount} }) => {

    const navigate = useNavigate()

    return (
        <div className={className} key={id} onClick={() => navigate(`/post/${id}`)}>
            <div className="image">
            <img src={imageUrl || " "} alt={title}/>
            </div>
            <div className="content">
            <div className="title">
            {title}
            </div>
            <div className="info">
            <div className="publishedAt">
                <Icon 
                id = "calendar-o"
                color = "#070707ff" 
                size = "15" />
                {publishedAt}
            </div>
            <div className="comments">
                <Icon id = "comment-o" color = "#070707ff" size = "15"/>
                {commentsCount}
            </div>
            </div>
            </div>
        </div>
    )
};

export const PostList = styled(PostListContainer)`
    background-color:rgba(255, 255, 255, 0.43);
    border: 1px solid #313131ff;
    cursor: pointer;
    font-size: 10px;
    box-shadow: 0 2px 2px rgba(20, 20, 20, 0.4);
    max-width: 300px
    height: 400px
    
    
    & .image img {
        display: block;
    }
    & .publishedAt{
        display: flex;
        align-items: center;
        gap: 10px;
        
    }
    & .title {
        
        font-size: 15px;
        white-space: normal;
        max-width: 280px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        
    }
        & .info {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5px 5px 0 3px;
        font-size: 14px;
        
    }
        & .comments {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        gap: 10px;
        
    }
      & .content {
   
          padding: 3px;
      }  
`;