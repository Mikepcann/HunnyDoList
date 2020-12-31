// starting the code from scratch

/*
    Things that need to happen:
        1. collect what the user enters into text field

        2. save that as varible

        3. add it to html list
            3b. name element with label that can be used to access it again
        
        4. add delete button to remove item from list and html

    

*/

// access enter Button
let addItem = document.getElementById('enterButt');
// access the List
let list = document.getElementById('todos-list');
// access Textbox
let textBox = document.getElementById('inputField');

let notify = () => {
    console.log('this worked!')
};
addItem.onclick = notify();
   