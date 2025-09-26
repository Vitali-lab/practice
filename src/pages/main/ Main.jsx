import { Input,Icon } from "../../components"
import { PostList } from "./components/PostList"
import { useServerRequest } from "../../hooks"
import { useEffect,useState } from "react"
import styled from "styled-components"

const MainContainer = ({className}) => {

    const [posts, setPosts] = useState([])
    const requestServer = useServerRequest()
    

    useEffect(() => {

            requestServer('fetchPosts') 
            .then((posts) => {
            setPosts(posts.res)
        })

    },[])

    
    
    return (
        <div className={className}>
            <div className="search">
                <Icon 
                id = "search" 
                color = "#070707ff" 
                size = "25"/>
                <Input width = "400px" />
            </div>
            <div className="posts">
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                      <PostList post={post} />
                    </div>
                )
            } )}
            </div>
        </div>
    )}


    export const Main = styled(MainContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin: 0 0 100px 0;
    
    & .posts{
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    width: 100%;
    gap: 40px;
    padding: 0 0 0 110px;}
    & img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-bottom: 1px solid #313131ff;
        
}
        & .search{
        margin-top: 30px;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            width: 100%;
            margin: 0 auto;
        } 
        & .search i {
            position: absolute;
            left: 770px;
            top: 10px
        }     
    `