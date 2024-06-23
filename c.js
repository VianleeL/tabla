const tabla = document.getElementById('tabla');
const tbody = document.getElementById('tbody');
const agregarFilaButton = document.getElementById('agregar-fila');
const eliminarFilaButton = document.getElementById('eliminar-fila');

let filas = [];

agregarFilaButton.addEventListener('click', agregarFila);
eliminarFilaButton.addEventListener('click', eliminarFila);

function agregarFila() {
    const fila = {
        nombre: prompt('Ingrese el nombre'),
        apellido: prompt('Ingrese el apellido'),
        edad: prompt('Ingrese la edad')
    };
    filas.push(fila);
    renderizarTabla();
}

function eliminarFila() {
    const filaSeleccionada = tbody.querySelector('tr.selected');
    if (filaSeleccionada) {
        const indice = Array.prototype.indexOf.call(tbody.children, filaSeleccionada);
        filas.splice(indice, 1);
        renderizarTabla();
    }
}

function renderizarTabla() {
    tbody.innerHTML = '';
    filas.forEach((fila, indice) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${fila.nombre}</td>
            <td>${fila.apellido}</td>
            <td>${fila.edad}</td>
            <td>
                <button class="editar">Editar</button>
                <button class="eliminar">Eliminar</button>
            </td>
        `;
        tr.addEventListener('click', () => {
            tr.classList.toggle('selected');
        });
        tbody.appendChild(tr);
    });
}

renderizarTabla();