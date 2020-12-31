// starting the code from scratch

/*
    Things that need to happen:
        1. collect what the user enters into text field CHECK

        2. save that as varible

        3. add it to html list
            3b. name element with label that can be used to access it again
        
        4. add delete button to remove item from list and html

    

*/


// access Textbox
let textBox = document.getElementById('inputField');
// access the List
let list = document.getElementById('todos-list');
// access enter Button
let addItem = document.getElementById('enterButt');
// access clear Button
let clearItem = document.getElementById('clearButt');

//  adds items to the list using the "Enter" BUTTON
addItem.addEventListener('click', function(){
    let listItem = document.createElement('li');
    listItem.innerHTML = textBox.value;
    list.appendChild(listItem);
    textBox.value = '';
    textBox.focus();
    
});
//  adds items to the list using the "Enter" KEY
textBox.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        let listItem = document.createElement('li');
        listItem.innerHTML = textBox.value;
        list.appendChild(listItem);
        textBox.value = '';  
    }
})
// clears the entire list using "Clear" BUTTON
clearItem.addEventListener('click', function(){
    list.innerHTML = '';
    textBox.focus();
});

