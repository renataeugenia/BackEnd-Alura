// metodo filter(), para (filtrar), em uma lista de alunos e notas os reprovados.

const nomes = ["Paulo", "José", "Antonio", "João", "Pedro"];
const notas = [10, 4.3, 7, 3.5, 7];

const reprovados = nomes.filter((_, indice) => notas[indice] < 6);
//foi substituida a variavel aluno por _ , assim o Vscode reconhece uma variavel que é declarada mas não utilizada!!
console.log(`reprovados: ${reprovados}`);
