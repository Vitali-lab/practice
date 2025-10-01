import { PostContent, Comments, PostForm   } from "./components"
import { useSelector, useDispatch } from "react-redux"
import { Error , PrivateContent} from "../../components"
import  { useServerRequest } from "../../hooks"
import { loadPostAsync, RESET_POST_DATA } from "../../actions"
import { selectPost } from "../../selectors"
import { useEffect, useLayoutEffect,useState } from "react"
import { ROLE } from "../../bff/constants"
import { useParams, useMatch } from "react-router-dom"
import { initialPostState } from "../../redusers/post-reduser"
import styled from "styled-components"



const PostContainer  = ( {className} ) => {

    const dispatch = useDispatch()
    const params = useParams()
    const requestServer = useServerRequest()
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    
    const isEditing = !!useMatch("/post/:id/edit")
    const isCreating = !!useMatch("/post")
    
    useLayoutEffect(()=>{
      dispatch(RESET_POST_DATA)
    },[dispatch , isCreating])

    const post = useSelector(selectPost)

    useEffect(()=>{
      if(isCreating){
        setIsLoading(false)
        return
      }
      dispatch(loadPostAsync(requestServer, params.id)).then((postData)=>{ 
        
          setError(postData.error)
          setIsLoading(false)
        
      })

    },[dispatch,requestServer,params.id])
  
   
    if (isLoading) {
      return null
    }

    const SpecificPostPage =  isCreating ||  isEditing 
          ? (
          <PrivateContent access={[ROLE.ADMIN]}  serverError={error}>
            <div className={className}>
               <PostForm post={isCreating ? initialPostState : post}/>
            </div>
            </PrivateContent>
  ) : (
            <div className={className}>
            <PostContent post={post}/>
            <Comments comments={post.comments} postId={post.id} author={post.author}/>
            </div>
          )


return error 
?  <Error error={error}/>
: SpecificPostPage

}

export const  Post = styled(PostContainer)`
padding: 0px 80px ;
margin-bottom: 100px;
font-size: 18px;



`