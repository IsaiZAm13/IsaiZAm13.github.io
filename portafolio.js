document.addEventListener('DOMContentLoaded', function () {
    const projectsContainer = document.getElementById('projects');

    const proyectos = [
        { nombre: 'lOGIN', descripcion: 'Demostracion funcional de un login', url: 'https://isaizam13.github.io/login.html', imagen: 'imagenes/login.png' },
        { nombre: 'Buscador de personaje con API', descripcion: 'Realiza la busqueda de un personaje de rick y morty usando APIS', url: 'https://isaizam13.github.io/APIRICK/list', imagen: 'imagenes/RICK.AVIF' },
        { nombre: 'Proyecto 3', descripcion: 'Descripción del Proyecto 3', url: 'https://ejemplo.com/proyecto3', imagen: 'ruta/a/imagen3.jpg' },
        // Agrega más proyectos según sea necesario
    ];

    proyectos.forEach((proyecto) => {
        const card = document.createElement('div');
        card.classList.add('project-card');
        card.innerHTML = `
            <a href="${proyecto.url}" target="_blank">
                <h2>${proyecto.nombre}</h2>
                <center>
                <img src="${proyecto.imagen}" alt="${proyecto.nombre} Imagen" style="width: 200px; height: 200px;"></center>
                <p>${proyecto.descripcion}</p>
            </a>
        `;
        projectsContainer.appendChild(card);
    });
});
