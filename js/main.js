function isIe(){
    return window.navigator.userAgent.indexOf('MSIE ') > -1 || window.navigator.userAgent.indexOf('Trident/') > -1;
}

function isEmail(login){
    email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return email.test(login);
}
function isLong(password){
    // проверка на длину строки
    return password.length >= 6;  
}
function isNumber(password){
    let num = /(?=.*[0-9])/;
    return num.test(password);
}
function areRegValid(password){
    let bigReg = /(?=.*[a-z])(?=.*[A-Z])/;
    return bigReg.test(password);
}
function areSymValid(password){
    let sym = /(?=.*[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?])/;
    return sym.test(password);
}

function getDate(){
    let date = new Date();
    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("clock").innerHTML = date.toLocaleTimeString() + "<br>" + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + ", " + days[date.getDay()];
}


window.onload = function(){
    
    if(isIe() === false){
        let myClock = setInterval(function() {
            getDate();
        }, 1000);

        document.getElementById("btn").addEventListener("click",function(){
            let login = document.getElementById("login").value;
            let password = document.getElementById("password").value;
            let emailError = document.getElementById("emailError");
            let passwordError = document.getElementById("passwordError");
            let validation = document.getElementById("validation");
            emailError.innerHTML = "";
            passwordError.innerHTML = "";
            validation.innerHTML = "";
            if(isEmail(login) && isLong(password) && isNumber(password) && areRegValid(password) && areSymValid(password)){
                validation.innerHTML = "Validation succesfull!";
            }
            else{
                validation.innerHTML = "Validation error";
                if(!isEmail(login)){
                    emailError.innerHTML = " incorrect email.";
                }
                passwordError.innerHTML = " your password needs to contain at least:";
                if(!isLong(password)){
                    passwordError.innerHTML += " 6 symbols;";
                }
                if(!areSymValid(password)){
                    passwordError.innerHTML += " one special character;";
                }
                if(!areRegValid(password)){
                    passwordError.innerHTML += " one capital letter;";
                }
                if(!isNumber(password)){
                    passwordError.innerHTML += " one number;";
                }
                
            }
            
            
        });
    }
    else{
        document.body.innerHTML = "<h1>Your browser is too old</h1>";
    }
}