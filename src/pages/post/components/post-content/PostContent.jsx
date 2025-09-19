import { Icon } from "../../../../components/Icon/Icon"
import styled from "styled-components"

const PostContentContainer = ( {className, post:{id , title , imageUrl , content, publishedAt} } ) => {

    console.log(publishedAt);
    

    return( 
        <div className={className}>
            <img src={imageUrl} alt={title}/>
            <h2>{title}</h2>
            <div className="special-panel">
              <div className="published-at">
                <Icon id="calendar" color = "#000000ff" size = "20"/> 
                {publishedAt}
               </div>
              <div className="buttons">
                <Icon id="pencil-square-o" color = "#070707ff" size = "25" />
                <Icon id="trash-o" color = "#000000ff" size = "25" />
                </div>
              
            </div>
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
  & .published-at{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  }
  & h2 {
    margin-bottom: 0px;
    }
  & .special-panel {
    height: 70px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  & .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  `