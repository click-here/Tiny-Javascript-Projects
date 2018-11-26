
var doThing = function(){
    var inputs = document.getElementsByClassName("grid-input");
    var x = 1;
    var y = 2;
    Object.values(inputs).forEach(function(item){
        item.style.gridColumn = x + "/" + y
        x += 1
        y += 1
    })
}

// var addRadiobuttonOld = function(){
//     var collectionLength = document.getElementsByClassName("grid-input").length;
//     var lastItem = document.getElementsByClassName("grid-input")[collectionLength - 1]
//     var p_prime = lastItem.cloneNode(true);
//     result = window.prompt("Whats the label gonna be?", "");
//     lastItem.parentElement.appendChild(p_prime)
//     doThing()
// }

var addRadiobutton = function(){
    var collectionLength = document.getElementsByClassName("grid-input").length;
    var lastItem = document.getElementsByClassName("grid-input")[collectionLength - 1]
    var inputElem = document.createElement("input");
    
    result = window.prompt("Whats the label gonna be?", "");
    inputElem.setAttribute("")
    
    lastItem.parentElement.appendChild(p_prime)
    doThing()
}