function changeStar1(star1,star2,star3,star4,star5){
    star1.className= "fas fa-star"
    star2.className= "far fa-star"
    star3.className= "far fa-star"
    star4.className= "far fa-star"
    star5.className= "far fa-star"
}

function changeStar2(star1,star2,star3,star4,star5){
    star1.className= "fas fa-star"
    star2.className= "fas fa-star"
    star3.className= "far fa-star"
    star4.className= "far fa-star"
    star5.className= "far fa-star"
}

function changeStar3(star1,star2,star3,star4,star5){
    star1.className= "fas fa-star"
    star2.className= "fas fa-star"
    star3.className= "fas fa-star"
    star4.className= "far fa-star"
    star5.className= "far fa-star"
}

function changeStar4(star1,star2,star3,star4,star5){
    star1.className= "fas fa-star"
    star2.className= "fas fa-star"
    star3.className= "fas fa-star"
    star4.className= "fas fa-star"
    star5.className= "far fa-star"
}

function changeStar5(star1,star2,star3,star4,star5){
    star1.className= "fas fa-star"
    star2.className= "fas fa-star"
    star3.className= "fas fa-star"
    star4.className= "fas fa-star"
    star5.className= "fas fa-star"
}

function addComment(){


    let comentariosBox= document.getElementById("coment-box")
    
    let div= document.createElement("div")
    div.className= "comentarios-box"
    comentariosBox.append(div)
    
    let div2= document.createElement("div")
    div2.className= "box-top"
    div.append(div2)
    
    let div3= document.createElement("div")
    div3.className= "perfil"
    div2.append(div3)
    
    let div4= document.createElement("div")
    div4.className= "foto-perfil"
    div4.innerHTML= "<img src='..\\..\\Images\\PROFILE-PICTURE\\Default-Profile-Picture.png'>"
    
    
    div3.append(div4)
    
    let div5= document.createElement("div")
    div5.className= "name-user"
    div5.innerHTML= "<input type='text' id= 'input' placeholder= 'Username' size=9>"
    div3.append(div5)
    
    let div6= document.createElement("div")
    div6.className= "comentarios"
    let star1= document.createElement("i")
    let star2= document.createElement("i")
    let star3= document.createElement("i")
    let star4= document.createElement("i")
    let star5= document.createElement("i")
    star1.className= "far fa-star"
    star2.className= "far fa-star"   
    star3.className= "far fa-star"   
    star4.className= "far fa-star"   
    star5.className= "far fa-star"
    div6.append(star1)
    div6.append(star2)
    div6.append(star3)
    div6.append(star4)
    div6.append(star5)
    
    star1.onclick= function(){changeStar1(star1,star2,star3,star4,star5)};
    star2.onclick= function(){changeStar2(star1,star2,star3,star4,star5)};
    star3.onclick= function(){changeStar3(star1,star2,star3,star4,star5)};
    star4.onclick= function(){changeStar4(star1,star2,star3,star4,star5)};
    star5.onclick= function(){changeStar5(star1,star2,star3,star4,star5)};

    div2.append(div6)
    
    let div7= document.createElement("div")
    div7.className= "comentario-visitante"
    div7.innerHTML= "<textarea id='textarea' rows='6' cols= '100' style='color: #4b4b4b' placeholder= 'Comente Aqui'></textarea>"
    
    
    
    div.append(div7)
}
