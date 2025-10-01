import { forwardRef } from "react"
import PropTypes from "prop-types";
import styled from "styled-components"


 const InputContainer = forwardRef(({className, width, ...props}, ref) => {
    return(
    
         <input className={className} type="text"   {...props} ref={ref} />
    
    )
})

export const Input = styled(InputContainer) `
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: ${({width = '100%'}) => width};
    height: 50px;
    font-size: 18px;
    border: 1px solid #313131ff;
    color:rgb(0, 0, 0);
    transition: all 0.2s ease-in-out;
    background-color:${({bgColor = '#cbcaffef'}) => bgColor};
    &:focus {
        outline: none;
        border: 3px solid #8b92e7ff;
        color:rgb(7, 7, 7);
        
    }
`

Input.propTypes = {
    children: PropTypes.node.isRequired,
    width: PropTypes.string,
    bgColor: PropTypes.string,
}