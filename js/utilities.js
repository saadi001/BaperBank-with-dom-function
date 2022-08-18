// function for getting input value 
function getInputValueById (inputField){
    const inputfield = document.getElementById(inputField);
    const inputFieldValueString  = inputfield.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    
    inputfield.value = '';
    return inputFieldValue;
}

// function for getting element value 
function getElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    
    return elementValue;
}

// function for set the element value 
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}



