function validateFirstName(){
    let firstName= document.getElementById("firstName").value
    let nameFormat= /^[A-Za-z]+$/   //Só aceita letras, quer sejam maiúsculas ou minúsculas
    if (!(firstName.match(nameFormat))){
        alert("Formato Inválido Primeiro Nome")
        document.getElementById("firstName").focus()
        return false
    } 
    return true
}

function validateLastName(){
    let lastName= document.getElementById("lastName").value
    let nameFormat= /^[A-Za-z]+$/
    if(!(lastName.match(nameFormat))){
        alert("Formato Inválido Último Nome")
        document.getElementById("lastName").focus()
        return false
    }
    return true
}
function validatePassword(){
    let password= document.getElementById("passwordR").value
    let passFormat= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d].\S{8,36}$/    //Entre 8 e 36 caracteres; pelo menos uma letra maúscula, uma minúscula e um número(/d), apenas pode conter letras e números
    if (!(password.match(passFormat))){
        alert("Password Deve Conter Entre 8 e 36 Caracteres; Pelo Menos Uma Letra Maiúscula, Uma Minúscula e Um Número, e Apenas Pode Conter Letras e Números")
        document.getElementById("passwordR").focus()
        return false
    }
    return true
}

function confPassword(){
    let password= document.getElementById("passwordR").value
    let confPassword= document.getElementById("confPassword").value
    if (password != confPassword){
        alert("Passwords Não Correspondem")
        document.getElementById("confPassword").focus()
        return false
    }
    return true
}

function validatePhone(){
    let phoneNumber= document.getElementById("phoneNumb").value
    let numberFormat= /^[0-9]+$/     //Ou ^\d+$ Apenas aceita números
    if(!(phoneNumber.match(numberFormat))){
        alert("Formato Inválido Contacto. Use Apenas Números")
        document.getElementById("phoneNumb").focus()
        return false
    }
    return true
}

function validateAddress(){
    let address= document.getElementById("addressR").value
    let addressFormat= /^[a-zA-Z0-9\s,'-]*$/
    if(!(address.match(addressFormat))){
        alert("Formato Inválido Endereço")
        document.getElementById("addressR").focus()
        return false
    }
    return true
}

function validateCodPostal(){
    let codPostal= document.getElementById("codPostal").value
    let codPostalFormat= /^\d{4}([\-]\d{3})?$/
    if(!(codPostal.match(codPostalFormat))){
        alert("Formato Inválido Código Postal")
        document.getElementById("codPostal").focus()
        return false
    }
    return true
}

function validateEmail(){
    let email= document.getElementById("emailR").value
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!(email.match(mailformat))){
        alert("Formato Inválido Email")
        document.getElementById("emailR").focus()
        return false
    }
    return true
}

function validateRegister(){
    if(validateFirstName() && validateLastName() &&  validatePassword() && confPassword() && validateEmail() && validatePhone() && validateAddress() && validateCodPostal()){
        alert("Bem Vindo à ALTESC!!!")
        return true
    }
    return false
}
