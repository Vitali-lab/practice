import { useEffect, useState } from "react"
import { UserRow, TableRow,  } from "./components"
import { Content } from "../../components"
import { useServerRequest } from "../../hooks"
import styled from "styled-components"  
import { ROLE } from "../../bff/constants"


const UsersContainer = ({className}) => {

    const [roles, setRoles] = useState([])
    const [users , setUsers] = useState([])
    const [errorMessage, setErrorMessage] = useState(null)
    const [shouldUpdateUsers, setShouldUpdateUsers] = useState(false)

    const requestServer = useServerRequest()

     
    
    useEffect(() => {
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
         requestServer('removeUser', userId)
    .then(() => {
      setShouldUpdateUsers(!shouldUpdateUsers)
    })
    }

    const newRoles = roles.filter(({ id:roleId }) =>  roleId !== String(ROLE.GUEST))

    return(
        <div className={className}>
          <Content error={errorMessage}>
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
            </Content>
        </div>
    )
}

export const Users = styled(UsersContainer) `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 100px;
font-size: 18px;
    

`