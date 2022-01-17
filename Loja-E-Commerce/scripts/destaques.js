// ADICIONAR JS UM CAROSSELL SLIDE DE IMAGENS DOS PRODUTOS DE DESTAQUES NA MAIN SECTION DA PAGINA 
// ADICIONAR JS AO CARRINHO DE COMPRAS DE FORMA ADICIONAR ARTIGOS SHOPPING CART !!


// função que permite alterar no evento do mouseover o texto para "COMPRAR"
function SonyVR_mouse_Over(){
    document.getElementById("changeText").innerHTML = "COMPRAR";
}

// função que permite alterar para default no mouseout
function SonyVR_mouse_Out(){
    document.getElementById("changeText").innerHTML = "SONY OCULOS VR";
}
// função que permite alterar no evento do mouseover o texto para "COMPRAR"
function FIFA22_mouse_over(){
    document.getElementById("changeText2").innerHTML = "COMPRAR";
}

// função que permite alterar para default no mouseout
function FIFA22_mouse_out(){
    document.getElementById("changeText2").innerHTML = "FIFA 22 EDIÇÃO LIMITADA XBOX SERIES";
}

// função que permite alterar no evento do mouseover o texto para "COMPRAR"
function PS5_mouse_over(){
    document.getElementById("changeText3").innerHTML = "COMPRAR";
}

// função que permite alterar para default no mouseout
function PS5_mouse_out(){
    document.getElementById("changeText3").innerHTML = "EXCLUSIVO PLAYSTATION 5";
}

// url serve como parametro para abrir a pop window
function openPopup(url){
    // var = window.open(url,'popUpWindow', definição da janela)
    popupWindow = window.open(url,'popUpWindow','height=500,width=500,left=480,top=100');
}



