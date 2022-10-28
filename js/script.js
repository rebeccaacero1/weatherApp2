//https://api.openweathermap.org/data/2.5/weather?q=manila&appid=c62f1d779dacae7486cddeeadac8a080&units=metric

let weather = {
    apiKey: 'c62f1d779dacae7486cddeeadac8a080',
    fetchWeather : function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=manila&appid=c62f1d779dacae7486cddeeadac8a080&units=metric").then
        ((Response) => Response.json()).then((data) => console.log(data));
    }
}