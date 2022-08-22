// metodo Object.keys - oferta de seguro:

const cliente = {
    nome: "Patricia Maia",
    idade: 38,
    cpf: "1256478973",
    email: "patricia_maia@email.com",
    telefone: ["11945622737", "1156372270"],
    dependentes: [
        {
        nome: "Matheus Hernandes Maia",
        parentesco: "filho",
        dataNasc: "25/03/2015"},
        {  
        nome: "Laura Hernandes Maia",
        parentesco: "filha",
        dataNasc: "17/06/2018"} 

    ],

    saldo: 500,
    depositar:function(valor){
        this.saldo += valor;
    }
};

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj); // traz o array com as  chaves 
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}
console.log(Object.values(cliente)); //traz o array com os valores das chaves
console.log(Object.entries(cliente)); //traz o array com varias arrays dentro sendo um conjunto de chaves e valores 0 chave e 1 valor
oferecerSeguro(cliente);