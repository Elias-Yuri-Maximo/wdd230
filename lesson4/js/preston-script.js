function toggleMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}

const copyrightyear = document.getElementById("copyrightyear");
copyrightyear.textContent = new Date().getFullYear();

const currentdate = document.getElementById("currentdate");
currentdate.textContent = new Date();