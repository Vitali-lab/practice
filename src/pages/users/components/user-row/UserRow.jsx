import styled from "styled-components";
import { Icon } from "../../../../components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ROLE } from "../../../../bff/constants/role";
import { TableRow } from "../table-row/TableRow";

const UserRowContainer = ({
  className,
  login,
  registered_at,
  role_id:userRoleID,
}) => {

  const roles = [{id: 1, name: 'admin'}, {id: 2, name: 'reader'}, {id: 3, name: 'moderator'}]
 
  const [currentRole, setCurrentRole] = useState('admin');
  const dispatch = useDispatch();

  const onRoleChange = (target) => {
    setCurrentRole(target.value);
  };

  return (
    <div className={className}>
      
      <TableRow theme={{borderRadius: '0px 0px 0 0'}}>
        <div className="login-column">{login}</div>
        <div className="registered-column">{registered_at}</div>
        <div className="role-column">
          <select
            value={currentRole}
            onChange={({ target }) => onRoleChange(target)}
          >
            {roles.map(({ id: roleId, name: roleName }) => (
              <option key={userRoleID} value={roleId} >
                {roleName}
              </option>
            ))}
          </select>
          <Icon id="floppy-o" size="25" margin="0 0 0 0" />
        </div>
      </TableRow>
      <Icon
        id="trash-o"
        size="25"
        margin="0 0 0 0"
        onClick={() => {
          dispatch();
        }}
      />
    </div>
   
  );
};

export const UserRow = styled(UserRowContainer)`

`;
