import { Button } from "../../../../components";

import styled from "styled-components";


const PaginationContainer = ({className, page, setPage , lastPage}) => {

    const nextPage = () => {
        if(page < 5){
            setPage(page + 1)
        }
    }
    const prevPage =( ) => {
        if(page > 1){
            setPage(page - 1)
        }
    }

    return(
        <div className={className}>
            <Button disabled={page === 1} onClick={() => setPage(1)}>В начало</Button>
            <Button disabled={page === 1} onClick={prevPage}>Предыдущая</Button>
            <div className="currtent-page">{page}</div>
            <Button disabled={page === lastPage} onClick={nextPage}>Следующая</Button>
            <Button disabled={page === lastPage} onClick={() => setPage(lastPage )}>В конец</Button>
        </div>
    )
}

export const Pagination = styled(PaginationContainer)`
display: flex;
align-items: center;
justify-content: center;



gap: 10px;
padding: 10px 0;
font-size: 20px;
& button{
    width: 200px;
    height: 40px;
    

}
`