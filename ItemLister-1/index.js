
const possibleResults = document.getElementById("possible-results");
possibleResults.addEventListener("mouseover", mouseEvent);
possibleResults.addEventListener("mouseout", mouseEvent);
possibleResults.addEventListener("keyup", pritisak);

const ulToDo = document.querySelector("ul.list-group");


possibleResults.appendChild(ulToDo.cloneNode(true));
const liResults = possibleResults.firstElementChild.children;

liResults[0].parentNode.addEventListener("click", mouseClicked);


const input = document.querySelector("input[type=text]");
input.addEventListener("keyup", pritisak);
input.addEventListener("focus", listShow);
input.addEventListener("focusout", listShow);

var mOverResults = false;
var mFocusInput = false;

function mouseEvent(e) {
    if(e.type == "mouseover") {
        mOverResults = true;
    } else {
        mOverResults = false;
    }
    showResults();
}

function listShow(e) {
    if(e.type === "focus") {
        mFocusInput = true;
        firstTimePressed = true;
    } else {
        mFocusInput = false;
    }
    showResults();
}

function showResults() {
    if(mFocusInput) {
        possibleResults.style.display = "block";
    } else if(!mOverResults && focusIndex === -1) {
        possibleResults.style.display = "none";
    }
}

function pritisak(e) {
    if([13, 37, 38, 39, 40].includes(e.keyCode)) {
        if(possibleLength !== 0) { checkFocusElement(e.keyCode); }
    } else {
        checkResultsToShow(liResults, e.target.value.toLowerCase());
    }
}

var focusIndex = -1, possibleLength = 0, firstTimePressed = true;
var listIndexArray = [];

function checkFocusElement(direction) {
    switch(direction) {
        case 13:
            fillInput(liResults[listIndexArray[focusIndex]].textContent);
            break;
        case 37:
          
            break;
        case 38:
            focusIndex--;
            break;
        case 39:
            
            break;
        case 40:
            focusIndex++;
            break;
        default:
           
    }
    if(firstTimePressed) {
        focusIndex = 0;
        firstTimePressed = false;
    } 
    else if(focusIndex < 0) { 
        focusIndex = possibleLength-1;
    } 
    else if(focusIndex > possibleLength-1) { 
        focusIndex = 0; 
    }
    liResults[listIndexArray[focusIndex]].focus();
    console.log(listIndexArray[focusIndex]);
}

function checkResultsToShow(list, inputVal) {
    possibleLength = 0;
    listIndexArray = [];
    for(let i = 0; i < list.length; i++) {
        list[i].style.display = "none";
        if(list[i].textContent.toLowerCase().indexOf(inputVal) == 0 && inputVal.length != 0)
        {
            list[i].style.display = "block";
            possibleLength++;
            listIndexArray.push(i);
        }
    }
}

function mouseClicked(e) {
    fillInput(e.target.textContent);
}

function fillInput(val) {
    focusIndex = -1;
    input.value = val;
    checkResultsToShow(liResults, val.toLowerCase());
    checkResultsToShow(ulToDo.children, val.toLowerCase());
    mOverResults = false;
    showResults();
}