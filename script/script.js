let numeroCartas = 0;
let listaCartas = ["./img/bobrossparrot.gif", "./img/bobrossparrot.gif", "./img/explodyparrot.gif", "./img/explodyparrot.gif", "./img/fiestaparrot.gif", "./img/fiestaparrot.gif", "./img/metalparrot.gif", "./img/metalparrot.gif", "./img/revertitparrot.gif", "./img/revertitparrot.gif", "./img/tripletsparrot.gif", "./img/tripletsparrot.gif", "./img/unicornparrot.gif", "./img/unicornparrot.gif"];
let jogadasCertas;
let jogada = 0;
let carta1;
let carta2;

function mostrarCartas (numeroCartas){
    let contador = numeroCartas;
    let mesaCartas = document.querySelector(".container");
    let baralhoAtual = [];

    // Código para distribuir as cartas em duas fileiras iguais 
    let tamanhoTela = numeroCartas * 85;
    tamanhoTela = tamanhoTela.toString();
    tamanhoTela = "width: " + tamanhoTela + "px";
    mesaCartas.setAttribute("style", tamanhoTela);

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
}

function comparador() { 
	return Math.random() - 0.5; 
}


while (numeroCartas < 4 || numeroCartas > 14 || numeroCartas%2 !== 0) {
    numeroCartas = prompt("Com quantas cartas quer jogar? (obs: número par entre 4 e 14)");
    numeroCartas = Math.floor(numeroCartas);
}

jogadasCertas = numeroCartas / 2;

mostrarCartas(numeroCartas);

