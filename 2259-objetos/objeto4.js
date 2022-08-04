// trabalhando com objeto dentro de outro objeto : compondo objetos

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com",
    telefone: ["11945622737", "1156372270"]
};

cliente.dependentes = {
    nome: "Matheus",
    parentesco: "filho",
    dataNasc: "25/03/2015"
};

console.log(cliente);

cliente.dependentes.nome = "Matheus Hernandes Maia";

console.log(cliente);
