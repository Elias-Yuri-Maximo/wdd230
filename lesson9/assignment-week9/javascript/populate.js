const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function(jsonObject){
        console.table(jsonObject);
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
        

            if (['Soda Springs','Fish Haven','Preston'].includes(towns[i].name)){
                let imageDiv = document.createElement('div');
                let dataDiv = document.createElement('div');
                dataDiv.setAttribute('class', 'data');


                let card = document.createElement('article');
                let name = document.createElement('h3');
                let motto = document.createElement('p');


                let yearFounded = document.createElement('p');
                let population = document.createElement('p');
                let annualRainfall = document.createElement('p');
                let image = document.createElement('img');
                
                name.textContent = towns[i].name;
                motto.textContent= towns[i].motto;
                yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
                population.textContent = 'Population: '+ towns[i].currentPopulation;
                annualRainfall.textContent = 'Average Rainfall: '+towns[i].averageRainfall;

                image.setAttribute('src', 'images/city-preview/' + towns[i].photo);
                motto.setAttribute('class','credit');

                imageDiv.appendChild(image);
                dataDiv.appendChild(name);
                dataDiv.appendChild(motto);
                dataDiv.appendChild(yearFounded);
                dataDiv.appendChild(population);
                dataDiv.appendChild(annualRainfall);

                card.appendChild(imageDiv);
                card.appendChild(dataDiv);

                document.querySelector('section').appendChild(card)
            }
        }




    });