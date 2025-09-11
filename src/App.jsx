import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'
import { Auth } from './pages/authorization/Auth'



const Content = styled.div`
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
  background: #b8b8b8ff;
  color: #333;
  margin: 0 auto;
`



export const  Blog = () => {

  const [name, setName] = useState('')




  return (
    
   <>
    <AppColumn>
    <Header />
    <Content>
       <Routes>
        <Route path='/' element ={<div>Главная</div>}/>
        <Route path='/login' element ={<Auth />}/>
        <Route path='/register' element ={<div>Регистрация</div>}/>
        <Route path='/users' element ={<div>Пользователи</div>}/>
        <Route path='/post' element ={<div>Новая статья</div>}/>
        <Route path='/post/:postId' element ={<div>Статья</div>}/>
        <Route path='*' element ={<div>Ошибка</div>}/>
       </Routes>
    </Content>
    <Footer />
    </AppColumn>
    
   </>
    
   
   
  )
}




