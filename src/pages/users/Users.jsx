import styled from "styled-components"
import { Icon } from "../../components/Icon/Icon"
import { useDispatch } from "react-redux"
import { ROLE } from "../../bff/constants/role"
import { useState } from "react"
import { UserRow, TableRow } from "./components"


const UsersContainer = ({className}) => {

    const users = [{login: 'PETYA', registered_at: '2022-12-12', role_id: 1}]
    
    

   

    return(
        <div className={className}>
            <h2>Пользователи</h2>
            <div>
                <TableRow theme={{borderRadius: '10px 10px 0 0'}}>
                  <div className="login-column">Логин</div>
                    <div className="registered-column">Дата регистрации</div>
                    <div className="role-column">Роль</div>
                </TableRow>
                </div>
                 {users.map(({id: userId, login ,registered_at, role_id: userRoleID}) => (
                <UserRow key={userId} userId={userId} login={login} registered_at={registered_at} userRoleID={userRoleID}/>
                 ))}
            
        </div>
    )
}

export const Users = styled(UsersContainer) `
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 100px;
    

`