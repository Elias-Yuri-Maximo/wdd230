function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();


const event = new Date();

const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };


currentdate.textContent = event.toLocaleDateString('en-UK', options);


const d = new Date();
const weekD = d.getDay();
console.log(weekD)


if (weekD == 5){
    console.log('it worked');
    document.querySelector(".pancake").style.display = "block";
}