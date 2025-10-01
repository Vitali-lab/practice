import PropTypes from "prop-types";
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
    background-color: #cbcaffef;
    color:rgb(4, 4, 4);
    border-bottom: 0.5px solid rgb(0, 0, 0);
    border-radius: ${({theme = {borderRadius: '10px 10px 0 0'}}) => theme.borderRadius};
    transition: background-color 0.2s ease-in-out;
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
    background-color:#cbcaffef;
    color:rgb(3, 3, 3);
    font-size: 16px;
    cursor: pointer;
    border: none;
    outline: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out;
       
        }
`

TableRow.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    theme: PropTypes.object,
}