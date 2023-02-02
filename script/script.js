let numeroCartas = 0;
let listaCartas = ["./img/imagem 01.png", "./img/imagem 01.png", "./img/imagem 02.png", "./img/imagem 02.png", "./img/imagem 03.png", "./img/imagem 03.png", "./img/imagem 04.png", "./img/imagem 04.png", "./img/imagem 05.png", "./img/imagem 05.png", "./img/imagem 06.png", "./img/imagem 06.png", "./img/imagem 07.png", "./img/imagem 07.png"];
let jogadasCertas;
let jogada = 0;
let carta1;
let carta2;
let tokenJogada = 0;
let segundos = 0;
let opcaoReiniciar;


function mostrarCartas (numeroCartas){
    let contador = numeroCartas;
    let mesaCartas = document.querySelector(".container");
    let baralhoAtual = [];

    // Código para distribuir as cartas em duas fileiras iguais centralizadas
    dimensionaTela (mesaCartas);   


    while (contador > 0){
        mesaCartas.children[contador-1].removeAttribute("hidden");
        baralhoAtual[contador-1] = listaCartas[contador-1];
        contador--;
    }   

    contador = numeroCartas;
    baralhoAtual = baralhoAtual.sort(comparador);
    baralhoAtual = baralhoAtual.sort(comparador);
    baralhoAtual = baralhoAtual.sort(comparador);
    baralhoAtual = baralhoAtual.sort(comparador);

    while (contador > 0){
        frenteCarta = mesaCartas.children[contador-1];
        frenteCarta = frenteCarta.children[1];
        frenteCarta = frenteCarta.children[0];
        frenteCarta.setAttribute("src", (baralhoAtual[contador-1]));
        contador--;
    }    
}

function dimensionaTela (mesaCartas){

    tamanhoTela = (numeroCartas/2) * 170;
    tamanhoTela = tamanhoTela.toString();
    tamanhoTela = "max-width: " + tamanhoTela + "px";
    mesaCartas.setAttribute("style", tamanhoTela); 
}

function virarCarta(carta){
    let atras = carta.children[0];
    let frente = carta.children[1];
    atras.classList.add("move-atras");
    frente.classList.add("move-frente");
    carta.classList.add("virada");
}

function desvirarCarta(carta){
    let atras = carta.children[0];
    let frente = carta.children[1];
    atras.classList.remove("move-atras");
    frente.classList.remove("move-frente");
    carta.classList.remove("virada");
    tokenJogada--;
}

function comparador() { 
	return Math.random() - 0.5; 
}

function saoIguais(carta1, carta2){
    frenteCarta1 = carta1.children[1];
    frenteCarta1 = frenteCarta1.children[0];
    frenteCarta2 = carta2.children[1];
    frenteCarta2 = frenteCarta2.children[0];
    if (frenteCarta1.getAttribute("src") === frenteCarta2.getAttribute("src")){
        return true;
    }
    else {
        return false;
    }
}

function novaJogada(carta){    

    if (!carta.classList.contains("virada") && tokenJogada < 2){
        tokenJogada++;
        jogada++;
        turnoJogada = jogada%2; //1 ou 0
        if (turnoJogada === 1){
            carta1 = carta;
            virarCarta(carta);
        }
        else {
            carta2 = carta;
            virarCarta(carta);
            if (saoIguais(carta1, carta2)){
                jogadasCertas--;
                tokenJogada = 0;
            }
            else {
                setTimeout(() => { desvirarCarta(carta1);}, 1000);
                setTimeout(() => { desvirarCarta(carta2);}, 1000);      
            }
        }
    }
    if (jogadasCertas == 0) {
        setTimeout(() => { finalJogo();}, 500);
    }
}

function finalJogo(){
    
    alert(`Você ganhou em ${jogada} jogadas! A duração do jogo foi de ${segundos} segundos!`);
        while (opcaoReiniciar !== "sim" && opcaoReiniciar !== "não"){
            opcaoReiniciar = prompt('Gostaria de reiniciar a partida? obs: escreva \"sim\" ou \"não\"').trim();
        }
        if (opcaoReiniciar === "sim"){      
            
            document.querySelector(".tempo").hidden = "true";
            let mesaCartas = document.querySelector(".container");
            contador = numeroCartas;
            while (contador > 0){
                mesaCartas.children[contador-1].hidden = true;
                contador--;
            }   
            segundos = 0;
            window.location.reload(true);
        }
        else {
            document.querySelector(".timer").hidden = true;
        }
}

function calculaTempo (){

    segundos++;

    if (segundos < 10){
        document.querySelector('.segundos').innerHTML= "0" + segundos; 
    }
    else {
        document.querySelector('.segundos').innerHTML=segundos; 
    }       
}


while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0) {
    numeroCartas = prompt("Com quantas cartas quer jogar? (obs: número par entre 4 e 14)");
    numeroCartas = Math.floor(numeroCartas);
}

jogadasCertas = numeroCartas / 2;

mostrarCartas(numeroCartas);

setInterval(calculaTempo,1000);




