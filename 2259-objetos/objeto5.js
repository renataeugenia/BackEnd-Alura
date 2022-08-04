//trabalhando com listas de dependentes: agregar novos dependentes
// tranformar o objeto dependentes em um Array [] e adicionar usaando o metodo push que coloca o objeto na ultima posição.

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com",
    telefone: ["11945622737", "1156372270"],
    dependentes: [{
        nome: "Matheus Hernandes Maia",
        parentesco: "filho",
        dataNasc: "25/03/2015"
    }]

};

cliente.dependentes.push({
    nome: "Laura Hernandes Maia",
    parentesco: "filha",
    dataNasc: "17/06/2018"
});

console.log(cliente);

const filho = cliente.dependentes.filter(dependente => dependente.parentesco != "filha");

console.log(filho[0].nome );


