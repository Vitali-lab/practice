import { useEffect,useState } from "react"
import { getWeather } from "../footer/weather"
import styled, {keyframes} from "styled-components"

const FooterInfo = styled.div`
    text-align: left;
    font-size: 20px;
    padding: 0 20px;
`
const Weather1 = styled.div`
    text-align: left;
    font-size: 20px;
    padding: 0 20px;
`

const fadeIn = keyframes`
  0% {
    transform: translateY(120px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;




 const FooterContainer = ({className}) => {

    const [weather, setWeather] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getWeather(setWeather,setLoading)
    },[])

    
    

    return (
        <>
        <div className={className}>
            <FooterInfo>
                Блог веб-разработчика 
                <br />
                3134114@mail.ru
            </FooterInfo>
        <Weather1>
            {loading?(
                <div>Загрузка погоды...</div>
            ):(
           <>
            <div>{weather.name} {new Date().toLocaleString("ru-RU",{day: "numeric", month: "long", year: "numeric"})}</div>
            <div>
          {weather?Math.round(weather.main.temp): 'api is not working'} градусов, {weather?weather.weather[0].description : 'api is not working'}
            </div>
            </>
            )}
            
        </Weather1>
        </div>
        
        </>
    )
}

export const Footer = styled(FooterContainer)`
width: 100%;
position: sticky;
left: 0;
top: 100vh;
height: 120px;
padding: 20px 40px;
background: #313131ff;
color: #ffffffff;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: 0 2px 10px rgba(20, 20, 20, 0.75);
z-index: 100;
animation: ${fadeIn} 0.6s ease-in-out;
`


{/* <h1>{weather.name}</h1>
        {Math.round(weather.main.temp)}
        {weather.weather[0].main}  */}