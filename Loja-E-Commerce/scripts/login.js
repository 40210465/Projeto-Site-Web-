function validateEmail(){
    let email= document.getElementById("email").value
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!(email.match(mailformat))){
        alert("Formato Inválido")
        document.getElementById("email").focus()
        return false
    }
    return true
}

function validatePassword(){
    let password= document.getElementById("password").value
    let passFormat= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].\S{8,36}$/    //Entre 8 e 36 caracteres; pelo menos uma letra maúscula, uma minúscula e um número(/d), apenas pode conter letras e números
    if (!(password.match(passFormat))){
        alert("Password deve conter entre 8 e 36 caracteres; pelo menos uma letra maúscula, uma minúscula e um número, e apenas pode conter letras e números")
        document.getElementById("password").focus()
        return false
    }
    return true
}

function validateLogin(){
    if(validateEmail() && validatePassword()){
        alert("Bem Vindo de Volta!!!")
        return true
    }
    return false
}