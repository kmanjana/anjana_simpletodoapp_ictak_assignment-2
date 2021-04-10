let username = document.getElementById("user");
let regexp_username = /^admin$/;
let error1 = document.getElementById("error1");

let password = document.getElementById("pwd");
let regexp_password = /^12345$/;
let error2 = document.getElementById("error2");



function validate(){
    if (((regexp_username.test(username.value))!=1) || ((regexp_password.test(password.value))!=1)){
           return false;
    }
    else {
         return true;
    }
}



function uservalue(callback){
    if((regexp_username.test(username.value)) !=1 ){
                error1.innerHTML= "Please enter valid username";
                username.style.border="1px solid red";
    }
    else {
                error1.innerHTML= "";
                username.style.border="none";
    }
    callback();
}

function userval(){
    uservalue(validate);
}


function pwdvalue(callback){
    if((regexp_password.test(password.value)) !=1 ){
        error2.innerHTML= "Please enter valid password";
        password.style.border="1px solid red";
    }
    else {
        error2.innerHTML= "";
        password.style.border="none";
}
callback();
}
function pwdval(){
    pwdvalue(validate);
}
