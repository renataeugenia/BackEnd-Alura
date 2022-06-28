// calcular media usando o laço forEach...metodo callback

const notas =[10, 9.5, 7, 8.5];
let somaDasNotas = 0;
// arrowfunction
notas.forEach(nota =>{

    somaDasNotas += nota;
});

let media = somaDasNotas/notas.length;

console.log(media);
// metodo callback
//declaração de função
// notas.forEach(function(nota){
//     somaDasNotas += nota;
// });