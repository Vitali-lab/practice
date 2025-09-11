import { forwardRef } from "react"
import styled from "styled-components"


 const InputContainer = forwardRef(({className, width, ...props}, ref) => {
    return(
    
         <input className={className} type="text" placeholder="Логин" {...props} ref={ref} />
    
    )
})

export const Input = styled(InputContainer) `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: ${({width = '100%'}) => width};
    height: 50px;
    font-size: 18px;
    transition: all 0.2s ease-in-out;
    &:focus {
        outline: none;
        border: 3px solid #8b92e7ff;
        color: #8b92e7ff;
        
    }
`