import { useEffect, useState } from "react"
import { UserRow, TableRow,  } from "./components"
import { PrivateContent } from "../../components"
import { useServerRequest } from "../../hooks"
import { checkAccess } from "../../utils"
import { selectUserRole } from "../../selectors"
import { useSelector } from "react-redux"
import styled from "styled-components"  
import { ROLE } from "../../bff/constants"


const UsersContainer = ({className}) => {

    const [roles, setRoles] = useState([])
    const [users , setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false)
    const userRole = useSelector(selectUserRole)
    const requestServer = useServerRequest()
     
  
    
    useEffect(() => {

      if(!checkAccess([ROLE.ADMIN], userRole)){
        
        return
      }

        Promise.all([
            requestServer('fetchUsers'), 
            requestServer('fetchRoles') ])
            .then(([usersRes, rolesRes]) => {
            if(usersRes.error || rolesRes.error){
             setErrorMessage(usersRes.error || rolesRes.error)
             return
            }
           
            setUsers(usersRes.res)
            setRoles(rolesRes.res)
            

        })

    },[requestServer , shouldUpdateUsers])

    const onUserRemove = (userId) => {

       if(!checkAccess([ROLE.ADMIN], userRole)){
        return
      }

         requestServer('removeUser', userId)
    .then(() => {
      setShouldUpdateUsers(!shouldUpdateUsers)
    })
    }

    const newRoles = roles.filter(({ id:roleId }) =>  roleId !== String(ROLE.GUEST))

    return(
        <div className={className}>
          <PrivateContent access={[ROLE.ADMIN]} serverError={errorMessage}>
            <h2>Пользователи</h2>
            <div>
                <TableRow theme={{borderRadius: '10px 10px 0 0'}}>
                  <div className="login-column">Логин</div>
                    <div className="registered-column">Дата регистрации</div>
                    <div className="role-column">Роль</div>
                </TableRow>
                </div>
                 {users.map(({id: userId, login ,registered_at, role_id: userRoleID}) => (
                <UserRow 
                key={userId} 
                userId={userId} 
                login={login} 
                registered_at={registered_at} 
                userRoleID={userRoleID}
                roles={newRoles}
                onUserRemove={() => onUserRemove(userId)}
                />
                 ))}
            </PrivateContent>
        </div>
    )
}

export const Users = styled(UsersContainer) `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

font-size: 18px;

    

`