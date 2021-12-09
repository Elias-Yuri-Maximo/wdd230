const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function(jsonObject){
        console.table(jsonObject);

        events = jsonObject.towns[2].events;
        console.log(events);

        for (let i = 0; i < events.length; i++ ) {
            let newP  = document.createElement('p');
            
            let date = events[i];
            console.log(date);

            newP.textContent = date;

            document.querySelector('#fish-haven-event').appendChild(newP)
        }
            




    });