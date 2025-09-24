import { PostContent, Comments, PostForm } from "./components"
import { useSelector, useDispatch } from "react-redux"
import  { useServerRequest } from "../../hooks"
import { loadPostAsync } from "../../actions"
import { selectPost } from "../../selectors"
import { useEffect } from "react"
import { useParams, useMatch } from "react-router-dom"
import styled from "styled-components"
const PostContainer  = ( {className} ) => {

    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    const post = useSelector(selectPost)
    const isEditing = useMatch("/post/:id/edit")
    
    useEffect(()=>{
      dispatch(loadPostAsync(requestServer, params.id))
    },[dispatch,requestServer,params.id])
  
    
    

return(
        <div className={className}>
          {isEditing 
          ? (<PostForm post={post}/>) 
          : (
            <>
            <PostContent post={post}/>
            <Comments comments={post.comments} postId={post.id} author={post.author}/>
            </>
          )}
        </div>
    )
}

export const  Post = styled(PostContainer)`
padding: 0px 80px ;
margin-bottom: 100px;
font-size: 18px;

`