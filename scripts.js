//Funcionamiento de nuestro slider en el header
var swiper = new Swiper(".mySwiper-1", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
})

//Funcionamiento de nuestro slider en el header
var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    breackpoints: {
        0: {
            slidesPerView: 1
        },
        520: {
            slidesPerView: 2
        },
        950: {
            slidesPerView: 1
        },

    }
})

//Arrays y objetos 

const arrayDeObjetos = [
    {
        nombre: "Sega Genesis 16 bit",
        lanzamiento: 1988,
        medio: "cartucho",
    },
    {
        nombre: "Nintendo Super NES Classic Edition",
        lanzamiento: 1991,
        medio: "cartucho",
    },
    {
        nombre: "Consola 8 Bit Family Blanco Rojo 90s",
        lanzamiento: 1983,
        medio: "cartucho",
    },
    {
        nombre: "PlayStation 1",
        lanzamiento: 1994,
        medio: "cd",
    },
    {
        nombre: "PlayStation 2",
        lanzamiento: 2000,
        medio: "cd",
    },
    {
        nombre: "Nintendo Wii",
        lanzamiento: 2006,
        medio: "cd",
    },
    {
        nombre: "Xbox 360",
        lanzamiento: 2005,
        medio: "cd",
    },

];

for (let i = 0; i < arrayDeObjetos.length; i++) {
    console.log("=========================");
    console.log("Nombre: " + arrayDeObjetos[i].nombre);
    console.log("Lanzamiento: " + arrayDeObjetos[i].lanzamiento);
    console.log("Medio: " + arrayDeObjetos[i].medio);
}


//Carrito
const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const elementos2 = document.getElementById('lista-2');
const elementos3 = document.getElementById('lista-3');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();


function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    elementos2.addEventListener('click', comprarElemento);
    elementos3.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);

    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    const totalElement = document.getElementById('total');

}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElementos(elemento);
    }
}

function leerDatosElementos(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}
function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>
            <img src="${elemento.imagen}" width=100>
      </td>
      <td>
           ${elemento.titulo}
      </td>
      <td>
         ${elemento.precio}
      </td>
      <td>
         <a herf="#" class="borrar" data-id=${elemento.id}">X</a>
      </td>
    `;

    lista.appendChild(row);
}


function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
}

//Boton de comprar en el carrito

document.addEventListener("DOMContentLoaded", function () {
    const comprarButton = document.getElementById("comprarButton");
    const mensajeCompra = document.getElementById("mensajeCompra");

    comprarButton.addEventListener("click", function () {
        mensajeCompra.style.display = "block";
        comprarButton.style.display = "none";
    });
});

//Aplicacion de JSON en el proyecto
document.addEventListener('DOMContentLoaded', function () {
    // Utilizamos la Fetch API para obtener el archivo JSON
    fetch('consolas.json')
        .then(response => response.json())
        .then(data => {
            // Mostramos la información en la consola
            console.log('Consolas Retro:');
            console.log(data);


        })
});