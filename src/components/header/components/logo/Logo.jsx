import styled from "styled-components";
import { Icon } from "../../../Icon/Icon";
import { Link } from "react-router-dom";

const LogoBigText = styled.div`
    
    font-size: 30px;
    font-weight: bold;
    text-align: left;
    line-height: 1;
    padding-top: 10px;
`
const LogoSmallText = styled.div`
    
    font-size: 18px;
    font-weight: bold;
`



export const LogoContainer = ({className}) => (
    <Link className={className} id="logo" to="/">
        <Icon id = "code" size = "60" margin = "0 10px 0 0" color = "#8b92e7ff"></Icon>
        <div>
            <LogoBigText>Блог</LogoBigText>
            <LogoSmallText>веб-разработчика</LogoSmallText>
        </div>
    </Link>
)

export const Logo = styled(LogoContainer)`
  display: flex;
  align-items: center;
  padding: 0 20px;
  text-decoration: none;
  color: #ffffffff;

  
  
    
`;