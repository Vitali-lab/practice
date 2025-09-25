import { PostContent, Comments, PostForm } from "./components"
import { useSelector, useDispatch } from "react-redux"
import  { useServerRequest } from "../../hooks"
import { loadPostAsync, RESET_POST_DATA } from "../../actions"
import { selectPost } from "../../selectors"
import { useEffect, useLayoutEffect } from "react"
import { useParams, useMatch } from "react-router-dom"
import { initialPostState } from "../../redusers/post-reduser"
import styled from "styled-components"
const PostContainer  = ( {className} ) => {

    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    
    const isEditing = useMatch("/post/:id/edit")
    const isCreating = useMatch("/post")
    
    useLayoutEffect(()=>{
      dispatch(RESET_POST_DATA)
    },[dispatch , isCreating])

    const post = useSelector(selectPost)

    useEffect(()=>{
      if(isCreating){
        return
      }
      dispatch(loadPostAsync(requestServer, params.id))
    },[dispatch,requestServer,params.id])
  
    const postState = {
      id: "",
      title: "",
      imageUrl: "",
      content: "",
      publishedAt: "",
      comments: [],
    };
    

return(
        <div className={className}>
          {isCreating ||  isEditing 
          ? (<PostForm post={isCreating ? postState : post}/>) 
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