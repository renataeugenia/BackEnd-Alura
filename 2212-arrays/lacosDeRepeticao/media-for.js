//calculando média com laço de repetição For

const notas =[10, 9.5, 7, 8.5];
let somaDasNotas = 0;

for(let i=0; i< notas.length; i++){

    somaDasNotas += notas[i];
}

let media = somaDasNotas/notas.length;

console.log(media);