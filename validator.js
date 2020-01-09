// This file is meant to be reused for form validation.

const messageRequired = 'Value is required';
const invalidNumber = 'Invalid number entered. Please try again';
const invalidEmail = 'Invalid email adress. Please try again';

function checkRequired(valField, displayID){
    let displayHandler = document.getElementById(displayID);

    if(valField.value == null || valField.value == ''){
        displayHandler.innerHTML = messageRequired;
        valField.focus();
        return false;
    } else{
        displayHandler.innerHTML = '';
        return true;
    }
}

function isValidNumber(valField, displayID){
    let displayHandler = document.getElementById(displayID);
    if(isNaN(valField.value)){
        displayHandler.innerHTML = invalidNumber;
        valField.focus();
        return false;
    } else {
        displayHandler.innerHTML= '';
        return true;
    }
}

function checkEmail(valField, displayID){
    let displayHandler = document.getElementById(displayID);
    let emailFormat = '/\S+@\S+\.\S+/';
    let emailString = valField.value;

    if(!emailFormat.test(emailString)){
        displayHandler.innerHTML = invalidEmail;
        valField.focus();
        return false;
    } else {
        displayHandler.innerHTML = '';
        return true;
    }

}