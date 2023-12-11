$(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });

  
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${apiKey}`;
    return $.getJSON(url);
  }
  const uescLat = -14.8658;
const uescLon = -39.0617;

getWeather(uescLat, uescLon).then(data => {
    const temp = data.main.temp;
    const feelsLike = data.main.feels_like;
    const description = data.weather[0].main;
    const windSpeed = data.wind.speed;
    const humidity = data.main.humidity;
  
    $("#a52").html(`
      <h2>Previsão do Tempo</h2>
      <p>Temperatura: ${temp.toFixed(1)}°C</p>
      <p>Sensação Térmica: ${feelsLike.toFixed(1)}°C</p>
      <p>Descrição: ${description}</p>
      <p>Velocidade do Vento: ${windSpeed.toFixed(1)} m/s</p>
      <p>Umidade: ${humidity}%</p>
    `);
  });
  
  $(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      centerMode: true,
      variableWidth: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  

  