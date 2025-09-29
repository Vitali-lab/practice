import { Icon, Input } from "../../../../components"
import styled from "styled-components"

const SearchContainer = ({className, searchPhrase , onChange}) => {



    return (
        <div className={className}>
             <Input value={searchPhrase} onChange = {onChange}  width = "700px" placeholder = "Поиск по заголовкам..." />
                <Icon 
                    id = "search" 
                    color = "#070707ff" 
                    size = "25"/>
        </div>
    )
}

export const Search = styled(SearchContainer)`

        margin-top: 30px;
            position: relative;
            display: flex;
           
            width: 640px;
            margin: 30px auto 0;
        
        & > div {
            position: absolute;
            right: 10px;
            top: 5px
        } 
            input {
                padding-right: 40px;
             }
`