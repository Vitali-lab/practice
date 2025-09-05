import styled from "styled-components"
import { Icon } from "../../../Icon/Icon"
import { Link, useNavigate } from "react-router-dom"


const RightAlignet = styled.div`
   display: flex;
   justify-content: flex-end;
`

const Button = styled.button`
   font-size: 18px;
   width: 100px;
   height: 35px;
   margin: 0 0 10px 0;
   cursor: pointer;
  
`

 const  ControlPanelContainer = ({className}) => {

    const navigate = useNavigate()


    return (
        <div className={className}>
           <RightAlignet>
           
            <Link to="/login"><Button>Войти</Button></Link>
           </RightAlignet>
           <RightAlignet>
    <div onClick={() => navigate(-1)}>
        <Icon id = "backward" size = "25" margin = "0 25px 0 0"  />
    </div>
    <Link to={"/post"}><Icon id = "file-text-o" size = "25" margin = "0 25px 0 0" /></Link>
    <Link to={"/users"}><Icon id = "users" size = "25" margin = "0 0px 0 " /></Link>
           </RightAlignet>
        </div>
    )
}


export const ControlPanel = styled(ControlPanelContainer)`
   width: 300px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   
`