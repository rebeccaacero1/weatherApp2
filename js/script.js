//https://api.openweathermap.org/data/2.5/weather?q=manila&appid=c62f1d779dacae7486cddeeadac8a080&units=metric


//Promise
/* let weather = {
    apiKey: 'c62f1d779dacae7486cddeeadac8a080',
    fetchWeather : function(){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=manila&appid=c62f1d779dacae7486cddeeadac8a080&units=metric").then
        ((Response) => Response.json()).then((data) => console.log(data));
    }
} */


let weather = {
    apiKey: 'c62f1d779dacae7486cddeeadac8a080',
    fetchWeather : function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid="+ this.apiKey)
        .then((Response) => Response.json())
        .then((data) => this.displayweather(data));
    },
    displayweather: function(data){
        const{name} = data;
        const{icon,description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
    }
}