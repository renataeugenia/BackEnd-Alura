// calculando media de 4 notas com o metodo reduce()!!

const notas = [10, 8, 8.5, 9];

const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;

console.log(media);
