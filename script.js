document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.carousel + button:first-of-type');
    const nextButton = document.querySelector('.carousel + button:last-of-type');

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -200, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: 200, behavior: 'smooth' });
    });
});

const input = document.getElementById('input');
const boton = document.getElementById('miboton');
const lista = document.getElementById('lista');

function buscar() {
    lista.innerHTML = "";

    const busqueda = input.value.toLowerCase();
    peliculas.forEach(function (genero) {
        genero.contenido.contenido.forEach(function (subgenero) {
            subgenero.peliculas.forEach(function (pelicula) {
                if (pelicula.titulo.toLowerCase().includes(busqueda)) {
                    const item = document.createElement('div');
                    item.className = "card bg-white text-gray-900 p-4 rounded-md shadow-md mb-3";
                    item.innerHTML = `
                        <h5 class="text-xl font-bold">${pelicula.titulo}</h5>
                        <p class="text-sm">Año: ${pelicula.contenido.año}</p>
                        <p class="text-sm">Director: ${pelicula.contenido.director}</p>
                    `;
                    lista.appendChild(item);
                }
            });
        });
    });
}

boton.addEventListener('click', buscar);
