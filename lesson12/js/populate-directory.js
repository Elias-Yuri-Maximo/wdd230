/*const requestURL = '../json/comapanies.json';

fetch(requestURL)
    .then(function (response){
        return response.json();

    })
    .then(function(jsonObject){
        console.table(jsonObject);
        console.log(jsonObject);
        //const towns = jsonObject['towns'];

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
    */
    let myURL = "https://elias-yuri-maximo.github.io/json-host/companies.json"

    fetch(myURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);

      for (let company of jsObject.companies) {

            let card = document.createElement('figure');
            //This will be the card.

            let image = document.createElement('img');
            let imageSrc = "images/directory/"+company.imageName;
            image.setAttribute('src',imageSrc);
            card.appendChild(image);

            let name = document.createElement('h4');
            name.innerHTML = company.name
            card.appendChild(name)
            //NAME

            let motto = document.createElement('p');
            motto.innerHTML = "'"+company.motto+"'";
            card.appendChild(motto);
            //MOTTO



            let contactInfo = document.createElement('p');
            contactInfo.innerHTML = company.telephone +"<br>"+company.email;
            card.appendChild(contactInfo);







            document.querySelector('.directory-grid').appendChild(card);




        

            /*
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
            */
       // }
    }




});
  
  

 