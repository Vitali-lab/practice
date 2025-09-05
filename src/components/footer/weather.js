export const getWeather = async (setWeather) => {
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=e42bd5313f33efcb6fcc2ee95aa526a7"
  )
    .then((response) => response.json())
    .then((weather) => {
      console.log(weather);
      setWeather(weather);
    });
};
