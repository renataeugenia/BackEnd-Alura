// Ponto Extra na nota: usando o metodo map() que tambem é uma função callback, que retorna uma nova array.

const notas = [10, 9, 8, 7, 6];

const notasAtuais = notas.map(nota => nota == 10 ? nota : ++nota);
                                                        // aqui o incremento vem antes de nota, onde 1 ponto é adicionado a nota antes de retornar.  
console.log(notasAtuais);