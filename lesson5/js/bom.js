//Example of altering nodes (

//const link = document.querySelector('a');
//  link.textContent = 'Mozilla Developer Network';
// link.href  = 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents';

//EXAMPLE OF CREATING NODES 
//const sect = document.querySelector('section');
//selects the element
//const para = document.createElement('p');
//para.textContent = 'We hope you enjoyed the ride.';
//creates the content
//sect.appendChild(para);
//appends it to the document

// should add a node at the end of the program 
//const text = document.createTextNode(' — the premier source for web development knowledge.');
//const linkPara = document.querySelector('p');
//linkPara.appendChild(text);

//should move the paragraph down the link 
//sect.appendChild(linkPara);

//removes a node 
//sect.removeChild(linkPara);

//removes a node 
//linkPara.remove();
//linkPara.parentNode.removeChild(linkPara);

//HTMLElement.style, chances the css directly 
//para.style.color = 'white';
//para.style.backgroundColor = 'black';
//para.style.padding = '10px';
//para.style.width = '250px';
//para.style.textAlign = 'center';

const unorderedList = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');




function addBook(){

    if (input.value == ''){
        alert('Blank submit, write something.');
    } else{
        console.log('It worked');
        //if the console 

            //CREATES NEW LI
            const newBook = document.createElement('li');    
            newBook.textContent = input.value;
            console.log(newBook);   

            //CREATES NEW BUTTON
            const newDeleteButton = document.createElement('button');
            newDeleteButton.textContent = '❌'
            
            console.log(newDeleteButton);

            //PUTS NEW BUTTON INTO NEW LI
            newBook.appendChild(newDeleteButton);
            
            // PUTS THE NEW LI INTO THE UNORDERED LIST
            unorderedList.appendChild(newBook);
            

            //ADDS EVENT LISTENER TO NEW DELETE BUTTON 
            newDeleteButton.addEventListener('click', function(){

                //WHEN CLICKED DELETES THE NEW ENTRY
                unorderedList.removeChild(newBook);
            })
      
            
            input.focus()
            input.value = "";
    }
    
}




















