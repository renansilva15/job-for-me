

function cadastrar (){
    localStorage.name = document.getElementById("sign-name").value;
    localStorage.email = document.getElementById("sign-email").value;
    localStorage.pass = document.getElementById("sign-pass").value;
}

function logar (){
    var logM = document.getElementById("email-login").value;
    var logP = document.getElementById("pass-login").value;
    var logPass = logP.toString();
    var logMail = logM.toString();

    var url = ((logMail == localStorage.email) && 
    (logPass == localStorage.pass)) ? ("index-log.html") : 
    (alert("Dados incorretos"), "sign-in.html");

    location.assign(url);
}