// funções Callback recebem outra função como parametro

const nomes = ["Paulo", "André", "Laura", "Manoela", "Helena"];

nomes.forEach(ImprimirNomes);

function ImprimirNomes(nome){
    console.log(nome);
}
