//metodo reduce(): para reduzir a um unico numero - aplicado no contexto de calculo geral da media de 3 salas

const salaJavascript = [7,9,8,8,10,7.5,7,5,8];
const salaJava = [8,9,10,7.5,7,9];
const salaPython = [9.5,8,9,3.5];

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);

    return somaDasNotas/notasDaSala.length;

}

console.log(`Média da sala de Javascript ${mediaSala(salaJavascript)}`);
console.log(`Média da sala de Java ${mediaSala(salaJava)}`);
console.log(`Média da sala de Python ${mediaSala(salaPython)}`);