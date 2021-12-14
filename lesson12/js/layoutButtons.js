
// Get the elements with class="column"

list = document.querySelector(".directory-grid");
list.removeChild(list.childNodes[0]);  

// Declare a loop variable
var i;

// List View
function listView() {
    let elements = document.querySelector(".directory-grid").childNodes;
    document.querySelector('.directory-grid').setAttribute('style', 'display:block')

    console.log(elements)
    for (let element of elements) {
        
       
        element.setAttribute('style', 'display:flex');

        
        element.firstChild.setAttribute('style','display:none')
 
      
    }
  }
  
  // Grid View
  function gridView() {
    let elements = document.querySelector(".directory-grid").childNodes;
    document.querySelector('.directory-grid').setAttribute('style', 'display:grid')
    for (let element of elements) {
    
        element.setAttribute('style', 'display:block');
       
        element.firstChild.setAttribute('style','display:block')

  
        
      }
  }