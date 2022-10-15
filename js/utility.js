//console.log('Utility File');

function getInputFieldValueById(inputValue) {
    const inputFieldValue = document.getElementById(inputValue);
    const setInputValueString = inputFieldValue.value;
    const setInputValue = parseFloat(setInputValueString);

    inputFieldValue.value = '';

    return setInputValue;
}

function getTextValueById(textValue) {
    const existingTextValue = document.getElementById(textValue);
    const setTextValueString = existingTextValue.innerText;
    const setInputValue = parseFloat(setTextValueString);

    return setInputValue;
}

function getTextElementValueById(elementId, newValue) {
    const existingTextValue = document.getElementById(elementId);
    existingTextValue.innerText = newValue;
}