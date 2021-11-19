//const apiURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e5f1135fd924cb47372cbb1fe41a055a";
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=69aef0ffa210c9d7c671a4ff748191dd";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });


  //69aef0ffa210c9d7c671a4ff748191dd

  //69aef0ffa210c9d7c671a4ff748191dd