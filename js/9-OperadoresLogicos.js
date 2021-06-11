console.log("Trabalhando com condicionais");
console.log("Destinos possiveis");

const listaDeDestinos = new Array(
    'Salvador', 'São Paulo', 'Rio de Janeiro');



listaDeDestinos.push('curitiba');
console.log(listaDeDestinos);


const idadeComprador = 16;
const estaAcompanhado = true;
const PassagemComprada = true;

//verificações :
if (idadeComprador >= 18 || estaAcompanhado == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
    console.log(listaDeDestinos);

} else {
    console.log("Comprador menor de idade , proibida a venda por lei ");
    console.log(listaDeDestinos);
}

console.log("Embarque: \n")
if (idadeComprador >= 18 || estaAcompanhado && PassagemComprada == true) {
    console.log("Boa Viagem!!");

} else {
    console.log("Você não pode embarcar");
}