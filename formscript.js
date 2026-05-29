var nameError = document.getElementById("name-error");
var phoneError = document.getElementById("phone-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName(){
    var name = document.getElementById("contact-name").value;
    if(name.length == 0){
        nameError.innerHTML = "NAME IS REQUIRED";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "WRITE FULL NAME";
        return false;
    }
    nameError.innerHTML = "<img src='check_circle.png'>";
    return true;
}
function validatePhone(){
    var phone = document.getElementById("contact-phone").value;    
    if(phone.length == 0){
        phoneError.innerHTML = "PHONE NUMBER IS REQUIRED";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = "ENTER VALID PHONE NUMBER";
        return false;
    }
    phoneError.innerHTML = "<img src='check_circle.png'>";
    return true;
}
function validateEmail(){
    var email = document.getElementById("contact-email").value;
    if(email.length == 0){
        emailError.innerHTML = "EMAIL IS REQUIRED";
        return false;
    }
    if(!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        emailError.innerHTML = "ENTER VALID EMAIL";
        return false;
    }
    emailError.innerHTML = "<img src='check_circle.png'>";
    return true;
}
function validateMessage(){
var message = document.getElementById("contact-message").value;
    var required =  30;
    var left = required - message.length;
    if(left > 0){
        messageError.innerHTML = left + " MORE CHARACTERS REQUIRED";
        return false;
    }
    messageError.innerHTML = "<img src='check_circle.png'>";
    return true;
}
function validateForm(){
    if (!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        submitError.style.display = "block";
        submitError.innerHTML = "PLEASE FIX ERROR TO SUBMIT";
        setTimeout(function(){submitError.style.display = "none";}, 3000);
        return false;
    }
    submitError.style.display = "none";
    return true;
}
