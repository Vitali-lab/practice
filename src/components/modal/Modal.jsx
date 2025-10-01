import styled from "styled-components"
import PropTypes from "prop-types";
import { Button } from "../button/Button"
 
const ModalContainer = ( { className, text, confirm,id ,cancel} ) => {

    return(
        <div className={className}>
            <div className="modal">
                        <div className="question">{text}</div>
                        <div className="buttons">
                            <Button width="150px" onClick={() => confirm(id)}>Да</Button>
                            <Button width="150px" onClick={() => cancel(false)}>Нет</Button>
                        </div>
                        </div>
        </div>
    )

}

export const Modal = styled(ModalContainer)`
position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0; 
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
z-index: 9999;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
gap: 20px;
& .modal {
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #cbcaffef;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
    width: 500px;
    height: 200px;
    color:rgb(0, 0, 0);
    border: 1px solid #313131ff;
    
}
& .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
    
    }
`
Modal.propTypes = {
    text: PropTypes.string.isRequired,
    confirm: PropTypes.func.isRequired,
    cancel: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
}