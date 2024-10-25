      
let Esadmin = document.getElementById('Esadmin');

if(localStorage.getItem("admin")){
    Esadmin.style.display='block';
}else{
    Esadmin.style.display='none';

}


// Simulación de los exámenes asignados
const examenesAsignados = [
    {
        curso: 'Inglés',
        profesor: 'John Doe',
        fecha: '12/10/2024',
        aula: 'C24',
        nivel: 'Intermedio (B1)',
        estado: 'Calificado',
        nota: '85'
    },
    {
        curso: 'Alemán',
        profesor: 'Jane Smith',
        fecha: '20/10/2024',
        aula: 'B12',
        nivel: 'Avanzado (C1)',
        estado: 'No calificado',
        nota: '-'
    }
];

// Función para mostrar u ocultar exámenes
function cargarExamenes() {
    const mensajeExamenes = document.getElementById('mensaje-examenes');
    const examenesAsignadosDiv = document.getElementById('examenes-asignados');
    const tablaExamenes = document.getElementById('tabla-examenes');

    if (examenesAsignados.length > 0) {
        mensajeExamenes.style.display = 'none';
        examenesAsignadosDiv.style.display = 'block';

        examenesAsignados.forEach((examen) => {
            const fila = `
                <tr>
                    <td>${examen.curso}<br>Profe: ${examen.profesor}<br>Fecha: ${examen.fecha}</td>
                    <td>${examen.aula}</td>
                    <td>${examen.nivel}</td>
                    <td>${examen.estado}<br>Nota: ${examen.nota}</td>
                    <td><button class="btn btn-primary" onclick="mostrarFormulario()">Inscribirse</button></td>
                </tr>
            `;
            tablaExamenes.innerHTML += fila;
        });
    } else {
        mensajeExamenes.style.display = 'block';
        examenesAsignadosDiv.style.display = 'none';
    }
}

// Función para mostrar el formulario de inscripción
function mostrarFormulario() {
    document.getElementById('formulario-inscripcion').style.display = 'block';
}

// Función de inscripción
function inscribirseExamen() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('dni').value;

    if (nombre && apellido && dni) {
        alert('Inscripción completada.');
        document.getElementById('formulario-inscripcion').style.display = 'none';
    } else {
        alert('Por favor complete todos los campos.');
    }
}


//                          vista del profesor--------------------------------------------------------------------
function mostrarSeccionExamen(idioma, nivel) {
    document.getElementById('cursoIdioma').textContent = idioma;
    document.getElementById('cursoNivel').textContent = nivel;
    document.getElementById('examSection').style.display = 'block';
}

function subirExamen() {
    alert('El examen ha sido subido y los estudiantes han sido notificados.');
    // Lógica para subir el examen y notificar a los estudiantes
}

// Cargar los exámenes al inicio
window.onload = cargarExamenes;
