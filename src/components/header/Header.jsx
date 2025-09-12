import styled,{keyframes} from "styled-components";
import { ControlPanel, Logo } from "./components";


const Discription = styled.div`
  font-style: italic;
  width: 200px;
  font-size: 16px;
  font-weight: semibold;
  letter-spacing: 4px;
  text-align: left;
  transition: color 0.2s ease-in-out;
  &:hover {
    color: #8b92e7ff;
  }
`
const fadeIn = keyframes`
  0% {
    
    transform: translateY(-120px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;


 const HeaderContainer = ({ className }) => {
  return (
    <header className={className}>
      <Logo />
      <Discription>Веб технологии <br />Написание кода <br /> Разбор ошибок</Discription>
      <ControlPanel />
    </header>
  );
};

export const Header = styled(HeaderContainer)`
  position: fixed;
  top: 0;
  left: 0;
  height: 120px;
  padding: 20px 40px;
  background: #313131ff;
  color: #ffffffff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 2px 10px rgba(20, 20, 20, 0.75);
  width: 100%;
  z-index: 100;
  animation: ${fadeIn} 0.6s ease-in-out;
  
`;
