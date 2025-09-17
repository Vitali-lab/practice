import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Auth } from './pages/authorization/Auth'
import { Registration } from './pages/registration/Registration'
import { Users } from './pages/users/Users'



const Page = styled.div`
  margin: 150px 0 0 0;
  
`
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`
const AppColumn = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 1200px;
  background: #cbcaffef;
  color: #333;
  margin: 0 auto;
`



export const  Blog = () => {

  const [name, setName] = useState('')




  return (
    
   <>
    <AppColumn>
    <Header />
    <Page>
       <Routes>
        <Route path='/' element ={<div>Главная</div>}/>
        <Route path='/login' element ={<Auth />}/>
        <Route path='/register' element ={<Registration/>}/>
        <Route path='/users' element ={<Users/>}/>
        <Route path='/post' element ={<div>Новая статья</div>}/>
        <Route path='/post/:postId' element ={<div>Статья</div>}/>
        <Route path='*' element ={<div>Ошибка</div>}/>
       </Routes>
    </Page>
    <Footer />
    </AppColumn>
    
   </>
    
   
   
  )
}




