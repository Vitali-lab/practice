

import styled from "styled-components";


 const IconContainer = ({className , id}) => (
   
    <div className={className}>
        <i className={`fa fa-${id}`}></i>
    </div>
    
)

export const Icon = styled(IconContainer)`
font-size: ${({size = '25'}) => size}px;
margin: ${({margin = '0'}) => margin};
color: ${({color = '#fff'}) => color}};
text-align: center;
transition: color 0.2s ease-in-out;
  &:hover {
    color: #8b92e7ff;
  }
`
