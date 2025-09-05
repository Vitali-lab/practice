import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'
import { Header, Footer } from './components'



const Content = styled.div`
  margin: 150px 0 0 0;
`
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`
const AppColumn = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
  width: 1100px;
  background: #9e9d9dff;
  color: #333;
  margin: 0 auto;
`





export const  Blog = () => {

  const [name, setName] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3005/users/1')
    .then(response => response.json())
    .then(json => setName(json.login))
  },[])


  return (
    <>
    <Header />
     <AppColumn>
    
    <Content>
       <i className="fa fa-address-book" aria-hidden="true"></i>  
       {name}
       <Routes>
        <Route path='/' element ={<div>Главная</div>}/>
        <Route path='/login' element ={<div>Авторизация</div>}/>
        <Route path='/register' element ={<div>Регистрация</div>}/>
        <Route path='/users' element ={<div>Пользователи</div>}/>
        <Route path='/post' element ={<div>Новая статья</div>}/>
        <Route path='/post/:postId' element ={<div>Статья</div>}/>
        <Route path='*' element ={<div>Ошибка</div>}/>
       </Routes>
    </Content>
    </AppColumn>
    <Footer />
    </>
   
  )
}




