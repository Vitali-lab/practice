import { Icon } from "../../../../../components/Icon/Icon"
import styled from "styled-components"


const CommentContainer  = ( {className , id , author , content, publishedAt} ) => {


    return( 
        <div className={className} key={id}>
            <div className="info-panel">
                <div className="author">
                    <Icon id = "user-circle-o"/>
                    {author}</div>
                <div className="publishedAt">
                    <Icon id = "calendar-o"/>
                    {publishedAt}</div>
            </div>
            <div className="content">{content}</div>
            <div className="published-at">{publishedAt}</div>
        </div>
    )
}

export const Comment = styled(CommentContainer)`
& .info-panel { 
display: flex;
align-items: center;
justify-content: space-between;
gap: 20px;
}
& .author { 
display: flex;
align-items: center;
gap: 10px;
}
& .publishedAt { 
display: flex;
align-items: center;
gap: 10px;
}
& .content {
}

`