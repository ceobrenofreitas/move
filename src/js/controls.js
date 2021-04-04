


var posCaixaX = document.querySelector(".caixa").style.left = "100px";
var posCaixaY = document.querySelector(".caixa").style.bottom = "180px";

var statusPX = document.querySelector("#statusPX");
var statusPAX = document.querySelector("#statusPAX");

var statusPY = document.querySelector("#statusPY");
var statusPAY = document.querySelector("#statusPAY");

let caixaMove = document.querySelector('#caixa1');

console.log(caixaMove.style.left);

var transicaoTime = " .5s ";
var trancicaoTipo = " ease ";

var caixaX = parseInt(posCaixaX);
var posX = caixaX;

var caixaY = parseInt(posCaixaY);
var posY = caixaY;

statusPX.innerHTML = posX;
statusPAX.innerHTML = posX;
statusPY.innerHTML = posY;
statusPAY.innerHTML = posY;


function atualizaXE(){
    statusPX.innerHTML = posX;
    statusPAX.innerHTML = posX + 50;
}

function atualizaXD(){
    statusPX.innerHTML = posX;
    statusPAX.innerHTML = posX - 50;
}

function atualizaYC(){
    statusPY.innerHTML = posY;
    statusPAY.innerHTML = posY - 50;
}

function atualizaYB(){
    statusPY.innerHTML = posY;
    statusPAY.innerHTML = posY + 50;
}



function cima(){
    posY = posY + 50;
    
    if(posCaixaY != posCaixaY){
        console.log(posCaixaY);
    } else {
        var posYATUAL = document.querySelector(".caixa").style.bottom = posY + "px";
        //console.log("Poisição da posY: " + posY);
        //console.log("Posição Atual Y: " + caixaY);
        document.querySelector(".caixa").style.transition = "all" + transicaoTime + trancicaoTipo;
        document.querySelector("#caixa").style.background = "grey";
    }

    atualizaYC();
}

function baixo(){
    posY = posY - 50;
    
    if(posCaixaY != posCaixaY){
        console.log(posCaixaY);
    } else {
        var posYATUAL = document.querySelector(".caixa").style.bottom = posY + "px";
        //console.log("Poisição da posY: " + posY);
        //console.log("Posição Atual Y: " + caixaY);
        document.querySelector(".caixa").style.transition = "all" + transicaoTime + trancicaoTipo;
        document.querySelector("#caixa").style.background = "yellow";
    }

    atualizaYB();
}

function direita(){

    posX = posX + 50;
    
    if(posCaixaX != posCaixaX){
        console.log(posCaixaX);
    } else {
        var posXATUAL = document.querySelector(".caixa").style.left = posX + "px";
        // console.log("Poisição da posX: " + posX);
        // console.log("Posição Atual: " + caixaX);
        document.querySelector("#caixa").style.background = "url('../img/direita.svg')";
        document.querySelector(".caixa").style.transition = "all" + transicaoTime + trancicaoTipo;
        document.querySelector("#caixa").style.background = "teal";
    }

    atualizaXD();
}

function esquerda(){
    posX = posX - 50;
    
    if(posCaixaX != posCaixaX){
        console.log(posCaixaX);
    } else {
        var posXATUAL = document.querySelector(".caixa").style.left = posX + "px";
        //console.log("Poisição da posX: " + posX);
        //console.log("Posição Atual: " + caixaX);
        document.querySelector(".caixa").style.transition = "all" + transicaoTime + trancicaoTipo;
        document.querySelector("#caixa").style.background = "pink";
    }

    atualizaXE();
}