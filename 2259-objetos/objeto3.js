// usando o Array para adicionar mais de uma informação no objeto 

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com",
    telefone: ["11945622737", "1156372270"]
};

cliente.telefone.forEach(telefone => console.log(telefone));


