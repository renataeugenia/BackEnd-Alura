// Orientação a Objetos no javascript - trabalhando com classes a partir do ES2015:

class Livro{
    constructor(autor, titulo, isbn, categoria, preco){
        this.autor = autor;
        this.titulo = titulo;
        this.isbn = isbn;
        this.categoria = categoria;
        this.preco = preco;

    }
// comportamento/ metodo da classe livro = vender / mostrarpreco:

    vender(valor){
        this.preco += valor;
        
    }

    mostrarPreco(){
        console.log(this.preco);
    }
}

const livro1 = new Livro("Loiane Groner", "Estrutura de dados e algoritimos com Javascript", "978-85-7522-693-3","linguagem programaçao", 95);


livro1.mostrarPreco();

console.log(livro1);