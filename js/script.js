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
    apiKey: 'f86aa67b2119b865446c94ac3bf2ae3b',
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
        document.querySelector('.city').innerText="weather in " + name;
        document.querySelector('.icon').src="https://openweathermap.org/img/wn/"+ icon + "@2x.png"; 
        document.querySelector('.description').innerText=description;
        document.querySelector('.temp').innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "humidity:" + humidity + '%'
        document.querySelector('.wind').innerText="wind: " + speed + "km/h"; 
        document.querySelector('.weather').classList.remove("loading")
        document.body.style.backgroundImage='url (https://source.unsplash.com/1600x900/?' + name + ')';
        ;
    },
        

    search: function(){
        this.fetchWeather(document.querySelector('.search__bar').value)
        }
    };

    document.querySelector('.search button'). addEventListener('click', function(){
        weather.search();
    })

    document.querySelector('.search__bar').addEventListener('keyup', function(event){
        if (event.key == "Enter"){
            weather.search();
        }
                
    })

    weather.fetchWeather("Malabon");