//variable forthe entire form

var form = document.getElementById('checkInformation');
//variable for the first nameinput 
var firstName = document.getElementById('first');
var firstNamePar = document.getElementById('firstName');
//variable for last name form
var lastName = document.getElementById('last'); 
var lastNamePar = document.getElementById('lastName');
//variable for the email input
var email = document.getElementById('em');
var emailPar = document.getElementById('email');
//variable for password input
var password = document.getElementById('pass');
var passwordPar = document.getElementById('password');


form.addEventListener('submit',function(event){
    //This variable is used to check whether the Email Address is in thhe correct form 
    var re = /\S+@\S+\.\S+/;

    if(!firstName.value){
        firstNamePar.innerHTML = '<p class="inputPar" id ="firstName"> <img src = "icon-error.svg">The First Name field is empty!</p>';
        event.preventDefault();
    }
    else{
        firstNamePar.innerHTML = '<p class="inputPar" id ="firstName"></p>';
    }

    if(!lastName.value){
        lastNamePar.innerHTML = '<p class="inputPar" id ="lastName"> <img src = "icon-error.svg">The Last Name field is empty!</p>';
        event.preventDefault();
    }
    else{
        lastNamePar.innerHTML = '<p class="inputPar" id ="lastName"></p>'
    }

    if(!email.value){
        emailPar.innerHTML = '<p class="inputPar" id ="email"> <img src = "icon-error.svg">The Email Address field is empty!</p>';
        event.preventDefault();
    }
    else if(!re.test(email.value)){
        emailPar.innerHTML = '<p class="inputPar" id ="email"> <img src = "icon-error.svg" id="errorimg">The Email Address is not valid!</p>';
        event.preventDefault();
    }
    else{
        emailPar.innerHTML = '<p class="inputPar" id ="email"></p>';

    }

    if(!password.value){
        passwordPar.innerHTML = '<p class="inputPar" id ="password"> <img src = "icon-error.svg">The Password field is empty!</p>';
        event.preventDefault();
    }
    else{
        passwordPar.innerHTML = '<p class="inputPar" id ="password"></p>';
    }
});
