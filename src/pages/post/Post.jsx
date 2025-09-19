import { PostContent, Comments } from "./components"
import { useSelector, useDispatch } from "react-redux"
import  { useServerRequest } from "../../hooks"
import { loadPostAsync } from "../../actions"
import { selectPost } from "../../selectors"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
const PostContainer  = ( {className} ) => {

    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    const post = useSelector(selectPost)
    
    useEffect(()=>{
      dispatch(loadPostAsync(requestServer, params.id))
    },[dispatch,requestServer,params.id])
  
    console.log(post.comments);
    

return(
        <div className={className}>
         <PostContent post={post}/>
         <Comments comments={post.comments} postId={post.id}/>
        </div>
    )
}

export const  Post = styled(PostContainer)`
padding: 0px 80px ;
margin-bottom: 100px;
font-size: 18px;

`