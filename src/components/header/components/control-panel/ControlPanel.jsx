import styled from "styled-components"
import { Icon } from "../../../Icon/Icon"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "../../../button/button"
import { useSelector , useDispatch } from "react-redux"
import { ROLE } from "../../../../bff/constants/role"
import { selectUserRole } from "../../../../selectors/select-user-role"
import { selectUserLogin } from "../../../../selectors/select-user-login"
import { logout } from "../../../../actions"
import { selectUserSession } from "../../../../selectors/select-user-session"


const RightAlignet = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 15px;
`
const UserName = styled.div`
   font-size: 18px;
   font-weight: bold;
   cursor: pointer;

   transition: color 0.2s ease-in-out;
   &:hover {
    color: #8b92e7ff;
   }
   
`



 const  ControlPanelContainer = ({className}) => {

    const navigate = useNavigate()
    const roleId = useSelector(selectUserRole)
    const login = useSelector(selectUserLogin);
    const dispatch = useDispatch();
    const session = useSelector(selectUserSession);

    
    return (
        <div className={className}>
           <RightAlignet>
           {roleId === ROLE.GUEST  ? (<Link to="/login"><Button>Войти</Button></Link>) 
           : (<>
           <UserName>{login}</UserName>
           <Link to="/" onClick={() => {
            dispatch(logout(session))
            }}><Icon className="fa fa-sign-out" ></Icon></Link>
           </>)
           }
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
   gap: 10px;
   
`