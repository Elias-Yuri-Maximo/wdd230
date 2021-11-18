//const apiURL = "api.openweathermap.org/data/2.5/forecast?id=5604473&appid=e5f1135fd924cb47372cbb1fe41a055a";
const apiURL = "api.openweathermap.org/data/2.5/weather?id=5604473&appid=69aef0ffa210c9d7c671a4ff748191dd";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });

  //69aef0ffa210c9d7c671a4ff748191dd