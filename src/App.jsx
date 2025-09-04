
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


  return (
    <>
    <Container>
       <i className="fa fa-address-book" aria-hidden="true"></i>  
    </Container>
    
    </>
  )
}

export default App
