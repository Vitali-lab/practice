

import styled from "styled-components";


 const IconContainer = ({className , id , onClick}) => (
   
    <div className={className} onClick={onClick}>
        <i className={`fa fa-${id}`}></i>
    </div>
    
)

export const Icon = styled(IconContainer)`
font-size: ${({size = '25'}) => size}px;
margin: ${({margin = '0'}) => margin};
color: ${({color = '#fff',disabled}) => disabled ? '#ccc' : color}};
text-align: center;
transition: color 0.2s ease-in-out;
  &:hover {
    color:${({hoverColor = '#8b92e7ff'}) => hoverColor};
  }
`
