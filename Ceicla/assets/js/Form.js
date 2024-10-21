   // Manejar la visibilidad de los formularios
   
   const loginForm = document.getElementById('loginForm');
   const registerForm = document.getElementById('registerForm');
   const registerLink = document.getElementById('registerLink');
   const loginLink = document.getElementById('loginLink');
   const registerRole = document.getElementById('registerRole');
   const dniAlumnoField = document.getElementById('dniAlumnoField');
   //maneja administrador
   class Sesion {
    constructor(gmail, contrasena) {
        this.gmail = gmail;
        this.contrasena = contrasena;
    }
  }
  
  let listaSesiones = [];
  
//funcion del administrador inicio sesion
function Formulario() {
    let gmail = document.getElementById("loginEmail").value;
    let contrasena = document.getElementById("loginPassword").value;
  
    if (gmail == "" || contrasena == "") {
        Swal.fire("Faltan datos");
    }
  
    if (gmail == "Admin@gmail.com" && contrasena == "1234") { // no lo toma ver que onda
      Swal.fire("Bienvenido Administrador", "", "success");
        let login = new Sesion(gmail, contrasena);
        listaSesiones.push(login);
        guardar();
        localStorage.setItem("admin", JSON.stringify(listaSesiones));
    }
  }

  let botonSesion = document.getElementById("btnInicio");
botonSesion.onclick = (e) => {
  e.preventDefault();
  Formulario();
}

//Funcionalidad del registro de usuario

   registerLink.addEventListener('click', function(event) {
       event.preventDefault();
       loginForm.style.display = 'none'; // Oculta el formulario de inicio de sesión
       registerForm.style.display = 'block'; // Muestra el formulario de registro
   });

   loginLink.addEventListener('click', function(event) {
       event.preventDefault();
       registerForm.style.display = 'none'; // Oculta el formulario de registro
       loginForm.style.display = 'block'; // Muestra el formulario de inicio de sesión
   });

   // Mostrar el campo de DNI del alumno si el usuario es tutor
   registerRole.addEventListener('change', function() {
       if (registerRole.value === 'tutor') {
           dniAlumnoField.style.display = 'block'; // Muestra el campo para el DNI del alumno
       } else {
           dniAlumnoField.style.display = 'none'; // Oculta el campo si no es tutor
       }
   });
   // Manejo del formulario de registro
   //fion de si se selcion la opcion tutor
registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir comportamiento por defecto del formulario
    
    // Verifica si el rol seleccionado es Tutor
    const role = document.getElementById('registerRole').value;
    
    if (role === 'tutor') {
        // Redirigir a la página de detalles del alumno (tutor.html)
        window.location.href = './tutor.html';
    } else {
        // Aquí puedes procesar el registro del alumno si no es tutor
        alert('Registro completado como Alumno.');
    }
});





// localstorage
localStorage.getItem("admin");