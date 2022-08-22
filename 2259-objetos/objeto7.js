// metodo => for ...in, percorrendo objetos e gerando relatorios

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

    depositar:function(valor)
    {
        this.saldo += valor;
    }

};

let relatorio = "";

for (let info in cliente) {
    if(typeof cliente [info] === "object" || typeof cliente [info] === "function")
    {
        continue;
    }else{
        relatorio += `
         ${info} ==>  ${cliente[info]}
         `;
    }
    
}
console.log(relatorio);