console.log('Trabalhando com listas');

// const salvador = 'salvador';
// const saoPaulo = 'São Paulo';
// const rioDejaneiro = 'Rio de janeiro';
// console.log("destinos possiveis:");
// console.log(salvador, rioDejaneiro, saoPaulo);

//ou o que faz mais sentido
const listaDeDestinos = new Array(
    'Salvador', 'São Paulo', 'Rio de Janeiro'
);
// Adicionar um item na lista 
listaDeDestinos.push('Curitiba');
console.log(listaDeDestinos);

//Removendo Elementos da Lista
//O contador começa em 0 
// ent salvador = 0 
// São Paulo = 1 
// Rio de Janeiro = 2
listaDeDestinos.splice(1, 1);
console.log(listaDeDestinos);

//como exibir um item em especifico 
console.log(listaDeDestinos[1]);