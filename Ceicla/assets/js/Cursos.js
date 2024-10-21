const esAdmin = false; // Simulación de sesión de administrador
const EsUser=true;
let Esadmin = document.getElementById('Esadmin');
let cursosUser= document.getElementById('Cursos-User');
if(esAdmin){
    Esadmin.style.display='block';
cursosUser.style.display='none';
}else{
    Esadmin.style.display='none';

cursosUser.style.display='block';
}


// Asegúrate de que las otras funciones (addCurso, darBajaCurso, mostrarCursos, etc.) estén aquí.
// Arreglos para almacenar los cursos y profesores
let cursos = [];
let profesores = [];
let pagos = {}; // { nombreCurso: cantidadAlumnosPagados }

// Función para agregar un curso
function addCurso() {
    const nombreCurso = document.getElementById('nombre-curso').value;
    const nivelCurso = document.getElementById('nivel-curso').value;
    const costoCurso = document.getElementById('costo-curso').value;

    if (nombreCurso && nivelCurso && costoCurso) {
        const nuevoCurso = {
            nombre: nombreCurso,
            nivel: nivelCurso,
            costo: costoCurso
        };

        cursos.push(nuevoCurso);
        pagos[nombreCurso] = 0; // Inicializar el contador de pagos para el nuevo curso
        mostrarCursos();
        actualizarSelectCursos();
        document.getElementById('curso-form').reset(); // Limpiar el formulario
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para actualizar el select de cursos
function actualizarSelectCursos() {
    const select = document.getElementById('curso-pagado');
    const option = document.createElement('option');
    option.value = '';
    option.textContent = '--Selecciona--';
    select.innerHTML = ''; // Limpiar opciones existentes
    select.appendChild(option); // Añadir opción por defecto

    cursos.forEach((curso) => {
        const option = document.createElement('option');
        option.value = curso.nombre;
        option.textContent = curso.nombre;
        select.appendChild(option);
    });
}

// Función para mostrar los cursos en la lista
function mostrarCursos() {
    const cursoList = document.getElementById('curso-list');
    cursoList.innerHTML = ''; // Limpiar la lista existente

    cursos.forEach((curso) => {
        const li = document.createElement('li');
        li.textContent = `${curso.nombre} - Nivel: ${curso.nivel} - Costo: $${curso.costo}`;
        cursoList.appendChild(li);
    });
}

// Función para dar de baja un curso
function darBajaCurso() {
    const nombreCursoBaja = document.getElementById('nombre-curso-baja').value;

    cursos = cursos.filter(curso => curso.nombre !== nombreCursoBaja);
    delete pagos[nombreCursoBaja]; // Eliminar pagos relacionados
    mostrarCursos();
    actualizarSelectCursos(); // Actualizar select de cursos
    document.getElementById('baja-curso-form').reset(); // Limpiar el formulario
}

// Función para agregar un profesor
function addProfesor() {
    const nombreProfesor = document.getElementById('nombre-profesor').value;
    const apellidoProfesor = document.getElementById('apellido-profesor').value;
    const dniProfesor = document.getElementById('dni-profesor').value;
    const sueldoProfesor = document.getElementById('sueldo-profesor').value;

    if (nombreProfesor && apellidoProfesor && dniProfesor && sueldoProfesor) {
        const nuevoProfesor = {
            nombre: nombreProfesor,
            apellido: apellidoProfesor,
            dni: dniProfesor,
            sueldo: sueldoProfesor
        };

        profesores.push(nuevoProfesor);
        mostrarProfesores();
        document.getElementById('profesor-form').reset(); // Limpiar el formulario
    } else {
        alert("Por favor, complete todos los campos.");
    }
}

// Función para mostrar los profesores en la lista
function mostrarProfesores() {
    const profesorList = document.getElementById('profesor-list');
    profesorList.innerHTML = ''; // Limpiar la lista existente

    profesores.forEach((profesor) => {
        const li = document.createElement('li');
        li.textContent = `${profesor.nombre} ${profesor.apellido} - DNI: ${profesor.dni} - Sueldo: $${profesor.sueldo}`;
        profesorList.appendChild(li);
    });
}

// Función para dar de baja un profesor
function darBajaProfesor() {
    const dniProfesorBaja = document.getElementById('dni-profesor-baja').value;

    profesores = profesores.filter(profesor => profesor.dni !== dniProfesorBaja);
    mostrarProfesores();
    document.getElementById('baja-profesor-form').reset(); // Limpiar el formulario
}

// Función para ver cuántos alumnos han pagado el material
function verAlumnosPagados() {
    const cursoSeleccionado = document.getElementById('curso-pagado').value;
    const numeroAlumnosPagados = pagos[cursoSeleccionado] || 0;
    
    document.getElementById('numero-alumnos-pagados').textContent = 
        `Número de alumnos que han pagado el material: ${numeroAlumnosPagados}`;
}

// Simulación de un pago (puedes llamar a esta función cuando un alumno pague)
function simularPago(nombreCurso) {
    if (pagos[nombreCurso] !== undefined) {
        pagos[nombreCurso]++;
        alert(`Un alumno ha pagado por el curso ${nombreCurso}`);
    }
}
// Función para mostrar/ocultar la sección del administrador
function toggleAdminSection() {
    const adminSection = document.getElementById('admin-section');
    if (adminSection.style.display === "none") {
        adminSection.style.display = "block";
    } else {
        adminSection.style.display = "none";
    }
}

// Función para mostrar/ocultar los detalles del curso
function mostrarDetalles(idioma, nivel, periodo, certificado, costo) {
    // Obtener el elemento de la sección de detalles
    const calendarSection = document.getElementById('calendarSection');
    
    // Verificar si la sección está visible o no
    if (calendarSection.style.display === 'none' || calendarSection.style.display === '') {
        // Si está oculta, mostrar la sección y actualizar los valores
        calendarSection.style.display = 'block';
        document.getElementById('idioma').textContent = idioma;
        document.getElementById('nivel').textContent = nivel;
        document.getElementById('periodo').textContent = periodo;
        document.getElementById('certificado').textContent = certificado ? 'Sí' : 'No';
        document.getElementById('costo').textContent = costo;
    } else {
        // Si está visible, ocultar la sección
        calendarSection.style.display = 'none';
    }
}

//----------------------------------------------------------vista del profesor:
// Variable para mantener el estado de la sección
let detallesVisible = false;

// Mostrar detalles del curso seleccionado y el formulario de subida de material
function DetallesProfesor(idioma, nivel) {
    detallesVisible = !detallesVisible; // Alterna el estado de visibilidad
    const detaProfesor = document.getElementById('DetaProfesor');
    
    // Si está visible, oculta; si no, muestra y completa la información
    if (detallesVisible) {
        detaProfesor.style.display = 'block';
        document.getElementById('idioma').textContent = idioma;
        document.getElementById('nivel').textContent = nivel;
    } else {
        detaProfesor.style.display = 'none'; // Ocultar detalles
    }
}

// Función para manejar la subida del material
function subirMaterial() {
    const titulo = document.getElementById('titulo').value;
    const contenido = document.getElementById('contenido').files[0];
    
    if (titulo && contenido) {
        // Lógica para subir el material (puedes manejarlo con un backend, API, etc.)
        alert('Material subido: ' + titulo);
        // Opcional: Limpiar el formulario después de la subida
        document.getElementById('titulo').value = '';
        document.getElementById('contenido').value = '';
    } else {
        alert('Por favor, completa el título y selecciona un archivo.');
    }
}

// Función para ocultar detalles manualmente
function ocultarDetalles() {
    document.getElementById('DetaProfesor').style.display = 'none';
    detallesVisible = false; // Actualiza el estado a oculto
}
