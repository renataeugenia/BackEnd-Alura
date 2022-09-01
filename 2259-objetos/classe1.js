

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

class LivroTecnologia extends Livro{
    constructor(autor, titulo, isbn, categoria, tecnologia, precoPromo){
        super(autor, titulo, isbn, categoria);
        this.tecnologia = tecnologia;
        this.precoPromo = precoPromo;
    }
    descontoVender(valor){
        this.precoPromo -= valor;
    }
}
const livro1 = new LivroTecnologia("Loiane Groner", "Estruturas de dados e algoritimos com Javascript", "978-85-7522-693-3", "linguagem programação", "sim", 95 );

console.log(livro1);

livro1.descontoVender(25);

console.log(livro1);