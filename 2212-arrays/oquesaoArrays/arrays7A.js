//localizando elementos na lista usando os metodos includes e indexOf

const alunos = ['Ana', 'Flávia', 'Manoela', 'Claudia'];

const notas = [10, 8, 8.5, 7.5];

let listaDeAlunosENotas = [alunos, notas];

const exibeNomeENota = (nomeDoAluno) => {
    if(listaDeAlunosENotas[0].includes(nomeDoAluno)){
        let indice = listaDeAlunosENotas[0].indexOf(nomeDoAluno);

        return listaDeAlunosENotas[0][indice] + ',sua nota é: ' + listaDeAlunosENotas[1][indice];

    } else {
        return "Aluno não esta na lista";
    }
  }

  console.log(exibeNomeENota("Manoela"));