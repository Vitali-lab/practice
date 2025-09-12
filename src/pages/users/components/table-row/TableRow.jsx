import styled from "styled-components"

const TableRowContainer = ({children, className , theme}) => (
    <div className={className}>{children}</div>
)

export const TableRow = styled(TableRowContainer)`
    width: 800px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    padding: 10px 20px;
    background-color: #313131ff;
    color: #ffffffff;
    border-radius: ${({theme = {borderRadius: '10px 10px 0 0'}}) => theme.borderRadius};
    & .login-column{
        width: 172px;
    }
    & .registered-column{
        width: 172px;
    }
    & .role-column{
        width: 172px;
    }}
`