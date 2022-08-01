// Objetos em Js , armazena informações de tipos diferentes como no exemplo abaixo / cria abstração. // estrutura de chaves e valores.
 

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com"
};
// acessando dados com notação de ponto

console.log(`O nome do cliente é: ${cliente.nome}, numero do cpf: ${cliente.cpf.substring(0,3)}`);