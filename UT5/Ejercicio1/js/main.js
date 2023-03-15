const table = document.querySelector('#table');
let libros = []


const getSeasons = () => {
    fetch("./json/data.json")
        .then(res => res.json())
        .then(librosJSON => {
            printLibros(librosJSON);
        })
        .then(error => {
            console.log(error);
        }
        );
};



function printLibros(element) {
    table.innerHTML = "";
    let contador = 1;
    element.forEach(e => {
    tablaNueva = `
    <tr>
          <th scope="col">${contador}</th>
          <td scope="col">${e.nom}</td>
          <td scope="col">${e.autor}</td>
          <td scope="col">${e.salida}</td>
          <td scope="col">${e.desc}</td>
    </tr>
    `;
    table.innerHTML += tablaNueva;
    contador = contador +1;
    });
}

function init() {
    getSeasons();
    const tagSearch = document.querySelector("#search-input");
    tagSearch.addEventListener("keyup", function (event) {
        const input = event.target;
        if (input.value.length >= 3) {
            let titleSearch = input.value.toUpperCase();
            let result = booksJSON.filtre(
                (book) => {
                    let title = book.title.toLowerCase();
                    return title.indexOf(titleSearch) > -1;
                }
            );
            populateTable(result);
        }else if (this.value.length == 0){
            populateTable(booksJSON);
        }
    });
}
init();


