import { useEffect,useState } from "react"
import { getWeather } from "./weather"
import styled from "styled-components"

const FooterInfo = styled.div`
    text-align: left;
    font-size: 20px;
    padding: 0 20px;
`
const Weather = styled.div`
    text-align: left;
    font-size: 20px;
    padding: 0 20px;
`

 const FooterContainer = ({className}) => {

    const [weather, setWeather] = useState({})

    useEffect(()=>{
        getWeather(setWeather)
    },[])


    return (
        <>
        <div className={className}>
            <FooterInfo>
                Блог веб-разработчика 
                <br />
                3134114@mail.ru
            </FooterInfo>
        <Weather>
            <div>{weather.name} {new Date().toLocaleString("ru-RU",{day: "numeric", month: "long", year: "numeric"})}</div>
            <div>
          {Math.round(weather.main.temp)} градусов, {weather.weather[0].description} 

            </div>
        </Weather>
        </div>
        
        </>
    )
}

export const Footer = styled(FooterContainer)`
position: absolute;
left: 0;
bottom: 0;
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
`


{/* <h1>{weather.name}</h1>
        {Math.round(weather.main.temp)}
        {weather.weather[0].main}  */}