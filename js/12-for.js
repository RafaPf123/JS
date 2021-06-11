console.log("Trabalhando com condicionais");
console.log("Destinos possiveis");

const listaDeDestinos = new Array(
    'Salvador', 'São Paulo', 'Rio de Janeiro');

console.log(listaDeDestinos);


const idadeComprador = 18;
const estaAcompanhado = false;
let PassagemComprada = false;
const destino = 'Rio de Janeiro';

//verificações :
const podeComprar =
    (idadeComprador >= 18 || estaAcompanhado == true);
let contador = 0;
let destinoExiste = false;
for (let cont = 0; contador < 3; cont++) {

    if (listaDeDestinos[contador] == destino) {
        console.log("Esse destino existe");
        destinoExiste = true;
        break;
    }
}

console.log("Destino existe: ", destinoExiste);
if (podeComprar && destinoExiste) {
    console.log("Boa Viagem!!");
} else {
    console.log("Desculpe tivemos um erro!");
}