import { Input,Icon } from "../../components"
import { Search } from "./components/search/Search"
import { PostList } from "./components/post-list/PostList"
import { Pagination } from "./components/pagination/Pagination"
import { useServerRequest } from "../../hooks"
import { PAGINATION_LIMIT } from "../../bff/constants"
import  { debounce } from "../main/utils/debounce"
import { useEffect,useState, useMemo } from "react"
import styled from "styled-components"

const MainContainer = ({className}) => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [shouldSearch, setShouldSearch] = useState(false) 
    const [searchPhrase , setSearchPhrase] = useState('')
    const requestServer = useServerRequest()
    
    

    useEffect(() => {

            requestServer('fetchPosts',searchPhrase, page , PAGINATION_LIMIT) 
            .then(({res:{posts , total}}) => {        
            setPosts(posts)
            setLastPage(total / PAGINATION_LIMIT.isInteger? total / PAGINATION_LIMIT : Math.ceil(total / PAGINATION_LIMIT))
        })

    },[requestServer,page, shouldSearch])

    const startDebounce = useMemo(() => debounce(setShouldSearch, 1000),[])

   const onSearch = ({target}) => { 
       setSearchPhrase(target.value)
       startDebounce(!shouldSearch)
       
    }

    
    return (
        <div className={className}>
            <Search searchPhrase = {searchPhrase} onChange = {onSearch}/>
            {posts.length ? (
                <div className="posts">
            {posts.map((post) => {
                return (
                    <div key={post.id}>
                      <PostList post={post} />
                    </div>
                )
            } )}
            </div>
            ) : (
                <div className="no-posts">Постов не найдено</div>
            )}
           <div className="pagination">
             {lastPage === 1|| !posts.length ? '' :<Pagination setPage = {setPage} lastPage = {lastPage} page={page}/>}
           </div>
        </div>
    )}


    export const Main = styled(MainContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 50px;
    height: 100%;
    padding: 0 0 110px 0;
    
    & .pagination{
    position: absolute;
    bottom: 130px;
    }
   
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
         & .no-posts {
         font-size: 25px;
         margin: 0 auto;
         margin-top: 100px;
         
         }   
    `