import styled from "styled-components";

const ErrorContainer = ({error, className}) => {
    return (
        <div className={className}>
            <h1>Ошибка</h1>
            <p>{error}</p>
        </div>
    );
};

export const Error = styled(ErrorContainer)`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;