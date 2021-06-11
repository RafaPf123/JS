console.log("Trabalhando com condicionais");
console.log("Destinos possiveis");

const listaDeDestinos = new Array(
    'Salvador', 'São Paulo', 'Rio de Janeiro');

console.log(listaDeDestinos);


const idadeComprador = 16;
const estaAcompanhado = false;
let PassagemComprada = false;
const destino = 'Rio de Janeiro';

//verificações :
const podeComprar =
    (idadeComprador >= 18 || estaAcompanhado == true);
let contador = 0;
let destinoExiste = false;
while (contador < 3) {

    if (listaDeDestinos[contador] == destino) {
        console.log("Esse destino existe");
        destinoExiste = true;
        break;
    }
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);