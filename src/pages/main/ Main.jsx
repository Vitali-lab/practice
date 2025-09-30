import { Input,Icon } from "../../components"
import { Search } from "./components/search/Search"
import { PostList } from "./components/post-list/PostList"
import { Pagination } from "./components/pagination/Pagination"
import { useServerRequest } from "../../hooks"
import { PAGINATION_LIMIT } from "../../bff/constants"
import  { debounce } from "../main/utils/debounce"
import { motion } from "framer-motion"
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

       const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
      ease: 'easeOut',
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.36 },
  },
};

    
    return (
        <div className={className}>
            <Search searchPhrase = {searchPhrase} onChange = {onSearch}/>
            {posts.length ? (
                <motion.div
                 variants={container}
                 initial="hidden"
                 animate="visible"
                 style={{ listStyle: 'none', margin: 0, padding: 0 }} 
                className="posts">
            {posts.map((post) => {
                return (
                    <motion.div key={post.id} variants={item}>
                      <PostList post={post} />
                    </motion.div>
                )
            } )}
            </motion.div>
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
    position: relative;
    left: 10%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    gap: 40px;
    }
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