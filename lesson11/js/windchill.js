//WIND CHILL CODE 

const temp = parseInt(document.querySelector('#temperature').innerText);
const windSpeed = parseInt(document.querySelector('#wind-speed').innerText);
//works


console.log(temp, windSpeed);


if (temp<=50 && windSpeed > 3){
const windChill = (35.74 +(0.6215 * temp))-(35.75 *Math.pow(windSpeed,0.16))+(0.4275*temp*Math.pow(windSpeed,0.16));
const wChill = Math.round(windChill);
document.getElementById("wind-chill").innerHTML= wChill;
}else{
    wChill = '-'
document.getElementById("wind-chill").innerHTML= wChill;
}

