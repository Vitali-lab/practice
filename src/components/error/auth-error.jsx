

import styled , { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const ErrorMassage = styled.div`
    background-color: #e66051ff;
    width: 300px;
    height: 80px;
    font-size: 18px;
    margin-top: 10px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 700;
    font-size: 14px;
    animation: ${fadeIn} 0.6s ease-in-out forwards; ;
    
`
