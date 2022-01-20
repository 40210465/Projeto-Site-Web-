
function AlertBox(){
    alert("MODO DE SEGURANÇA ATIVADO COM SUCESSO !!");
    document.getElementById('modal').style.display = 'none';
}

function ConfirmBox(){
    confirm("TEM A CERTEZA QUE PRETENDE DESATIVAR ?")
    document.getElementById('second-modal').style.display = 'none';
}

// para direcionar para o lobby do site quando eliminar a conta
function ConfirmBoxClear(){
    location.href = "/Loja-E-Commerce/index.html";
}

