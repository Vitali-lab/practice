import styled from "styled-components"

const TableRowContainer = ({children, className , theme}) => (
    <div className={className}>{children}</div>
)

export const TableRow = styled(TableRowContainer)`
    width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 0px;
    padding: 10px 20px;
    background-color: #313131ff;
    color: #ffffffff;
    border-bottom: 1px solid #ffffffff;
    border-radius: ${({theme = {borderRadius: '10px 10px 0 0'}}) => theme.borderRadius};
    transition: background-color 0.2s ease-in-out;
    &:hover{
        background-color: #313131e8;
       
    }
    & .login-column{
        width: 172px;
    }
    & .registered-column{
        width: 392px;
    }
    & .role-column{
        width: 172px;
    }
    & select{
    background-color: #313131ff;
    color: #ffffffff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
    &:hover{
        color: #8b92e7ff;
    }    
        }
`