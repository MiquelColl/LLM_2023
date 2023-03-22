// Creamos un objeto
// El export es para que sea exportable, para llamarlo desde el html
export class Book {

    // La variable static es algo que comparten todos los libros
    static stock = 10;

    // Los atriburos privados solo se pueden utilizar dentro de la classe o el objeto.
    #active=false

    // Creacion del modelo de la arquitectura de un objeto
    constructor(isbn, title, release, price, authorList){
    // Asignacion de atributos al objeto
    // Inicialmente estos atributos por defecto son publicos
        this.isbn=isbn;
        this.title=title;
        this.release=release;
        this.price=price;
        this.authorList=authorList;
        Book.stock=Book.stock-1;
    }

    // Creacion de metodos, parecido a funciones
    priceWithTax(){
        return this.price * 1.1;
    }

    render(){

        let authors=""
        this.authorList.forEach(author => {
            authors+=author.render()
        });
        
        return`
        <article>
            <h3> ${this.isbn} </h3>
            <h1> ${this.title} </h1>
            <p> ${this.release} <p>
            <p class="price"> ${this.price}€<p>
            <p>${authors}</p>
        </article>
            `
    }

    sale(){
        if(this.#active){
            console.log("Se puede vneder ");
        }else{
            console.log("No se puede vender");
        }
        
    }

    // Un metodo en estatico es un metodo q no pertenece a ningun objeto sino a la clase 
    static tax(){
        return "10%"
    }
}

// New = operador especial para crear objeto, con sus valores
// const book1 = new Book("12421367", "Harry Potter", 2009, 10.99);
// const book2 = new Book("12443213", "El Hobbit", 1989, 15.99);
// const book3 = new Book("12203413", "Un viaje al centro de la tierra", 2000, 13.99);

// console.log(book1.title);
// console.log(book1.priceWithTax() );

// book1.sale();

// Llamar a un metodo estatico
// console.log("El stock de libros es: ", Book.stock);

// No funciona
// console.log(book2.#active);


// Herencia de objetos, para reutilizar codigo
// class Comic extends Book{

//         constructor(isbn, title, release, price, volume){
//             // Super es un metodo que llama el constructor de padre (Book)
//             super(isbn, title, release, price)
//             this.volume=volume;
//         }
// }
// Crear objeto
// const comic1 = new Comic("8231990", "La patrulla X", 2022, 12.99, 1);

// console.log("Precio comic", comic1.priceWithTax());