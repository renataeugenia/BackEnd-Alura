//acessando dados com notação de colchetes

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com"
};

const chaves = ["nome", "idade", "cpf", "email"];

console.log(cliente[chaves[0]]);

//notação de colchetes com forEach função callBack

chaves.forEach(info => console.log(cliente[info]));
