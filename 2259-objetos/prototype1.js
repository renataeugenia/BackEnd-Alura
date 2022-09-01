
function Cliente (nome, cpf, email, saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.saldo=saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    };

}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;

}

const helena = new ClientePoupanca("Helena", "7894561239", "helena@email.com.br", 200, 600);
console.log(helena);

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
};

helena.depositarPoup(50);

console.log(helena.saldoPoup);