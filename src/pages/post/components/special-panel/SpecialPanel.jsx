import { Icon } from "../../../../components/Icon/Icon"
import styled from "styled-components"

const SpecialPanelContainer = ({className, publishedAt, editButton}) => {
    
    return(
        <div className={className}>
        <div className="special-panel">
                      <div className="published-at">
                        <Icon id="calendar" color = "#000000ff" size = "20"/> 
                        {publishedAt}
                       </div>
                      <div className="buttons">
                        {editButton}
                        <Icon id="trash-o" color = "#000000ff" size = "25" />
                        </div>
                      
                    </div>
        </div>
    )
}


export const SpecialPanel = styled(SpecialPanelContainer)`

 & .special-panel {
    height: 70px;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  & .buttons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
    & .published-at{
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px 0;
  }
  
  & h2 {
    margin-bottom: 0px;
    }
`