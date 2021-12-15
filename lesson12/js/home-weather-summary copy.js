
  //const apiURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e5f1135fd924cb47372cbb1fe41a055a";
  const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=3467865&units=imperial&appid=69aef0ffa210c9d7c671a4ff748191dd";

  fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);
     
      //Puts the temperature 
      document.querySelector("#temperature").textContent = "Temperature: "+jsObject.main.temp+"F";
  
      //Puts the current condition 
      document.querySelector("#weather-condition").textContent = "Weather Condition: "+jsObject.weather[0].description;
  
      //Puts the Humidity
      document.querySelector("#humidity").textContent = "Humidity: "+jsObject.main.humidity;
  
      
      
  
  
      //START WIND CHILL CODE 
  
      const temp = parseInt(jsObject.main.temp);
      const windSpeed = parseInt(jsObject.wind.speed);
  
      
      console.log(temp, windSpeed);
  
  
      
     
  
  
  
  
  
      //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      //const desc = jsObject.weather[0].description;  // note how we reference the weather array
      //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
      //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      //document.getElementById('icon').setAttribute('alt', desc);
    });
  
  
  
  
    //CODE FOR FIVE DAY FORECAST
    const forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=3467865&units=imperial&appid=69aef0ffa210c9d7c671a4ff748191dd";
  
  
  
  fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
      //console.log(jsObject);
  
  
      const sixForecast = jsObject.list.filter( x => x.dt_txt.includes("18:00:00"));
      console.log(sixForecast);
  
      const weekDays = ['Sun','Mon','Tue','Wed','Thu','Fri', 'Sat'];
      let i=0;
      sixForecast.forEach(forecast => {
        
       
        //Gets and prints the days of the weeks
        let theDate = new Date(forecast.dt_txt);

        if (document.querySelector('#day'+ (i+1))){

        document.querySelector('#day'+ (i+1)).innerHTML = weekDays[theDate.getDay()];
        document.querySelector('#temperature'+ (i+1)).innerHTML = (forecast.main.temp)+ '°F'; 
        
        //Gets and set the icons
        
        const imageSrc = 'https://openweathermap.org/img/w/'+forecast.weather[0].icon +'.png';
        document.querySelector('#img' + (i+1)).setAttribute('src', imageSrc);
        }
        i++;
      });
  
  
  
      //console.log(sixForecast);
  
         
         // document.querySelector()
      //document.getElementById('day'+(i+1)).innerHTML = jsObject.main.temp;
      
      //const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
      //const desc = jsObject.weather[0].description;  // note how we reference the weather array
      //document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
      //document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
      //document.getElementById('icon').setAttribute('alt', desc);
    });
  
    function closeAlert(){
        document.querySelector(".pancake").style.display = "none";

    }