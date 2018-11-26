
var formatInGrid = function(){
    var inputs = document.getElementsByClassName("grid-input");
    var i = 1;
    Object.values(inputs).forEach(function(item){
        item.style.gridColumn = i + "/" + ++i //pre-increment

    })
}

var addRadiobutton = function(){
    var collectionLength = document.getElementsByClassName("grid-input").length;
    var lastItem = document.getElementsByClassName("grid-input")[collectionLength - 1];
    
    // Create div for input and label
    var inputDiv = document.createElement("div");
    inputDiv.setAttribute("class","grid-input");
    
    // Get user input
    result = window.prompt("Whats the label gonna be?", "");
    
    // build input elem
    var inputElem = document.createElement("input");
    inputElem.setAttribute("type","radio");    
    inputElem.setAttribute("name","colors");
    inputElem.setAttribute("id",result + "-id");
    inputElem.setAttribute("value",result);

    // build label elem
    var labelElem = document.createElement("label");
    labelElem.setAttribute("for", result + "-id");
    labelElem.innerText = result;

    inputDiv.appendChild(inputElem);
    inputDiv.appendChild(labelElem);    
    lastItem.parentElement.appendChild(inputDiv);

    formatInGrid()
}