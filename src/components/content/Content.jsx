import styled from "styled-components"

const ContentContainer = ( {children , error} ) => 
     error ? (
        <>
        <h2>Ошибка</h2>
        <div>{error}</div>
        </>
        ):(
        children
    )

    


export const Content = styled(ContentContainer)`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`