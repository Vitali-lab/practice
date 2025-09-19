import { Icon } from "../../../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { TableRow } from "../table-row/TableRow";
import { useServerRequest } from "../../../../hooks";
import styled from "styled-components";

const UserRowContainer = ({
  className,
  userId,
  login,
  registered_at,
  userRoleID:userRoleID,
  roles,
  onUserRemove
}) => {

 
  const requestServer = useServerRequest()
  
 
  const [selectedUserRole, setSelectedUserRole] = useState(userRoleID);
  const [initialRoleId ,setInitialRoleId ] = useState(userRoleID)
  const onRoleChange = (target) => {
    setSelectedUserRole(Number(target.value));
  };

   const onRoleSave = (id , userRole) => {
    requestServer('updateUserRole', id, userRole)
    .then(() => {
      setInitialRoleId(userRole)
    })
  }
  

  const isSaveButtonDisabled = selectedUserRole === initialRoleId

  return (
    <div className={className}>
      
      <TableRow theme={{borderRadius: '0px 0px 0 0'}}>
        <div className="login-column">{login}</div>
        <div className="registered-column">{registered_at}</div>
        <div className="role-column">
          <select
            value={selectedUserRole}
            onChange={({ target }) => onRoleChange(target)}
          >
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={roleId} value={roleId} >
                {roleName}
              </option>
            ))}
          </select>
        </div>
       <Icon 
       id="floppy-o"  
       margin="0 0 0 0" 
       size="20" 
       color="#24ca56ff"
       disabled = {isSaveButtonDisabled}
       onClick={() => onRoleSave(userId, selectedUserRole)} />
        </TableRow>
       <Icon
        id="trash-o"
        size="20"
        margin="0 0 0 0"
        color="#c70303ff"
        hoverColor = "#8b92e7ff"
        onClick={onUserRemove}
      />
    </div>
   
  );
};

export const UserRow = styled(UserRowContainer)`
display: flex;
justify-content: center;
align-items: center;
margin: 0 0 0 25px;
gap: 10px;



`;
