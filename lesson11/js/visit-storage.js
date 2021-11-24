let currentDate = new Date();
let span = document.querySelector('#date-difference');



//if there is no last-date
if(!localStorage.getItem('last-date')){
  console.log('nop');
  span.innerHTML = 'Welcome to the website';


} else {

  //Gets the old date from the storage
let oldDate = new Date(localStorage.getItem('last-date'));

//calculates the days between two visits
let diffInTime = Math.abs(currentDate - oldDate);



//Gets the numbers of days in a second
let timeInDay = 1000 * 3600 * 24;
//debugger

let diffInDays = Math.ceil((diffInTime/timeInDay))

console.log(diffInDays, currentDate, oldDate);

span.innerHTML = diffInDays;
}



//cleans local storage
localStorage.clear();

//Sets a date at the end after all the calculations are done
localStorage.setItem('last-date', currentDate);