
function newItem() {
    // 1. Adding new item to list
    let list = $('#list');
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);

    if (inputValue === '') {
        alert('Item filed must not be empty!');
    }
    else {
        list.append(li);
    }

    // 2. Cross out item from list
    li.on('dblclick', function() {
        li.toggleClass('strike');
    });

    // 3. Adding the delete button "X":
    let crossOutButton = $('<button></button>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

    crossOutButton.on('click', function() {
        li.addClass('delete');
    });

    // 4. Allow the list to be re-ordered
    $('#list').sortable();
};












/*
function newItem(){

    //javascript
    //1. Adding a new item to the list of items: 
       let li = document.createElement("li");
       let inputValue = document.getElementById("input").value;
       let text = document.createTextNode(inputValue);
       li.appendChild(text);
    
       if (inputValue === '') {
         alert("You must write something!");
       } else {
         let list = document.querySelector('#list');
         list.appendChild(li);
       }
    
     //2. Crossing out an item from the list of items:
       function crossOut() {
             li.classList.toggle("strike");
         }
    
         li.addEventListener("dblclick",crossOut);
    
     //3(i). Adding the delete button "X": 
       let crossOutButton = document.createElement("crossOutButton");
         crossOutButton.appendChild(document.createTextNode("X"));
         li.appendChild(crossOutButton);
    
         crossOutButton.addEventListener("click", deleteListItem);
     //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
       function deleteListItem(){
             li.classList.add("delete")
         }
     // 4. Reordering the items: 
       $('#list').sortable();
    
    }
    */