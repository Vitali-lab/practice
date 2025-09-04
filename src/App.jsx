import { useEffect, useState } from 'react'
import './App.css'
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  width: 100%;
  height: 100vh;
    color: #61dafb;
`

function App() {

  const [name, setName] = useState('')

  useEffect(()=>{
    fetch('http://localhost:3005/users/1')
    .then(response => response.json())
    .then(json => setName(json.login))
  },[])


  return (
    <>
    <Container>
       <i className="fa fa-address-book" aria-hidden="true"></i>  
       {name}
    </Container>
    
    </>
  )
}

export default App
