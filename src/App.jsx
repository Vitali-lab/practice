import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'
import { Route, Routes } from 'react-router-dom'


const Content = styled.div`
  padding: 120px 0;
`
const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`

const Header = () => {
  return (
    <>
    <h1>Header</h1>
    </>
  )
}

const Footer = () => {
  return (
    <>
    <h1>Footer</h1>
    </>
  )
}

export const  Blog = () => {

  const [name, setName] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3005/users/1')
    .then(response => response.json())
    .then(json => setName(json.login))
  },[])


  return (
    <>
    <Header></Header>

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
  
    <Footer></Footer>
    </>
  )
}


