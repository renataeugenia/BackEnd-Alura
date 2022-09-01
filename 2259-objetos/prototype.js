
// declarando uma classe / função-metodo prototype (função construtora)


function Cliente (nome, cpf, email, saldo){
    this.nome=nome;
    this.cpf=cpf;
    this.email=email;
    this.saldo=saldo;
    this.depositar = function(valor){
        this.saldo += valor;
    };

}
const jose = new Cliente("José", "123456789", "jose@email.com.br", 500);
console.log(jose);
