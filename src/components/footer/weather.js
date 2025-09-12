export const getWeather = async (setWeather, setLoading) => {
  setLoading(true);
  await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Minsk&units=metric&lang=ru&appid=e42bd5313f33efcb6fcc2ee95aa526a7"
  )
    .then((response) => response.json())
    .then((res) => {
      setWeather(res);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    })

    .finally(() => setLoading(false));
};
