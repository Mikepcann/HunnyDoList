//This is the Script for the to do list

//selecting dom elements

var input = document.querySelector("input[type = 'text']");
var ul = document.querySelector("ul");

// adding event listener
input.addEventListener("keypress", function(keypressed) {
    if(keypressed.which === 13) {
        var li = document.createElement("li");
        var spanElement = document.createElement("span");
        var icon = document.createElement("i");

        var newTodo = this.value;
        this.value = " ";

        icon.classList.add('fas', 'fa-trash-alt');
        spanElement.append(icon);
        ul.appendChild(li).append(spanElement, newTodo);

        deleteTodo();

    }
});

// fuction to delete span if clicked

function deleteTodo(){
    for(let span of spans){
        span.addEventListener("click", function (){
            span.parentElement.remove();
            event.stopPropagation();
        });
    }
}
// event listener to line through list if cloicked

ul.addEventListener("click", function(ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
    }
}, false
);