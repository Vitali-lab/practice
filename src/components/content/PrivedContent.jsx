import { useSelector } from "react-redux"
import styled from "styled-components"
import { selectUserRole } from "../../selectors"
import { checkAccess } from "../../utils/"
import { ERROR } from "../../bff/constants"

const ContentContainer = ( {className, children , access , serverError = null} ) => {


    const userRole = useSelector(selectUserRole)

    const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED

    const error = accessError || serverError

   return (

     error ? (
        <div className={className}>
        <h2>Ошибка</h2>
        <div>{error}</div>
        </div>
        ):(
        children
    )
   )
}
    


export const PrivateContent = styled(ContentContainer)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 5px;
font-size: 20px;
color: #0f0f0fff;
padding: 5px 0;
margin: 0;


`