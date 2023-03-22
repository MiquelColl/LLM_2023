import { Book } from "./book.js";
import { Author } from "./author.js";
        const authorsHarryPotter=[
        
            new Author(1, "Joanne", "Rowling", "", 1979 )
        
        ];

        const authorsViaje=[

            new Author(1, "Joanne", "Rowling", "", 1979 ),
            new Author(2, "Emilio", "Mordor", "", 1979 )
        ]

        const bookList=[
        
            new Book("12421367", "Harry Potter", 2009, 10.99, authorsHarryPotter),
            new Book("12421367", "Harry Potter 2", 2009, 10.99, authorsHarryPotter),
            new Book("12421367", "Harry Potter 3", 2009, 10.99, authorsViaje),
            new Book("12421367", "Harry Potter 4", 2009, 10.99, authorsViaje),
            new Book("12421367", "Viaje al centro de la Tierra", 2005, 10.99, authorsViaje)

        ]   

        let comicContainer = document.querySelector('#comic-container')
        bookList.forEach(book => {
            comicContainer.innerHTML += book.render();
        })