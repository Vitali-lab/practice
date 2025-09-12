import { Children } from "react"
import styled from "styled-components"

const ButtonContainer = ({children, className, width, ...props}) => {
    return(
        <button className={className} type="button" {...props} >{children}</button>
    )
}

export const Button = styled(ButtonContainer) `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: ${({width = '100%'}) => width};
    height: 42px;
    font-size: 18px;
    cursor: pointer;
    transition: background-color,border-color 0.2s ease-in-out;
    &:hover {
        background-color: #8b92e7ff;
        border-color: #080808ff;
    }
   
`
