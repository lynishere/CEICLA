   // Manejar la visibilidad de los formularios
   
   const loginForm = document.getElementById('loginForm');
   const registerForm = document.getElementById('registerForm');
   const registerLink = document.getElementById('registerLink');
   const loginLink = document.getElementById('loginLink');
   const registerRole = document.getElementById('registerRole');
   const dniAlumnoField = document.getElementById('dniAlumnoField');
   //maneja administrador
    class Sesion {
        constructor(usuario, contrasena) {
            this.usuario = usuario;
            this.contrasena = contrasena;
        }
    }

    class Registro {
        constructor(nombre, apellido, tipo, dni_alumno, dni, correo_electronico, contraseña){
            this.nombre = nombre;
            this.apellido = apellido;
            this.tipo = tipo;
            this.dni_alumno = dni_alumno;
            this.dni = dni;
            this.correo_electronico = correo_electronico;
            this.contraseña = contraseña;
        }
    }
    let listaAdmin = [];
    let listaProfe = [];
    let listaAlumno = [];
    let listaTutor = [];
    let listaRegistro = [];

    function Formulario() {
        let usuario = document.getElementById("loginEmail").value;
        let contrasena = document.getElementById("loginPassword").value;

        if (usuario == "" || contrasena == "") {
            Swal.fire({
                title: "Datos faltantes",
                text: "Ingrese todos los datos correspondientes",
                icon: "warning"
            })
        }else if (usuario == "Admin@gmail.com" && contrasena == "1234") {
            Swal.fire({
                title: "Bienvenido admin",
                text: "¿En que lo vamos a trabajar hoy?",
                icon: "success"
            })
            let login = new Sesion(usuario, contrasena);
            listaAdmin.push(login);
            localStorage.setItem("admin", JSON.stringify(listaAdmin));
        }else if(localStorage.getItem("profes")){ 
            Swal.fire({
                title: "Bienvenido profesor",
                text: "¿A quien desaprobamos hoy?",
                icon: "success"
            })            
            let login = new Sesion(usuario, contrasena);
            listaProfe.push(login);
            localStorage.setItem("profesor", JSON.stringify(listaProfe));
        }else if(usuario.includes("@alum.ceicla") && localStorage.getItem("registro_alumno")){
            Swal.fire({
                title: "Bienvenido alumno",
                text: "¿Preparados para aprender?",
                icon: "success"
            })            
            let login = new Sesion(usuario, contrasena);
            listaAlumno.push(login);
            localStorage.setItem("alumno", JSON.stringify(listaAlumno));
        }else if(localStorage.getItem("registro_tutor")){
            Swal.fire({
                title: "Bienvenido tutor",
                text: "¿Hacemos una visita?",
                icon: "success"
            })
            let login = new Sesion(usuario, contrasena);
            listaAlumno.push(login);
            localStorage.setItem("tutor", JSON.stringify(listaTutor));
        }else{
            Swal.fire({
                title: "Cuenta no registada",
                text: "Registrese para inicar sesion",
                icon: "warning"
            })        
        }
    }

    function Cerrar(){
        localStorage.removeItem("alumno");
        localStorage.removeItem("tutor");
        localStorage.removeItem("profesor");
        localStorage.removeItem("admin");
        Swal.fire({
            title: "Sesiones cerradas",
            text: "Cuentas borradas de forma exitosas",
            icon: "success"
        })
    }

    function Eliminar(){
        localStorage.removeItem("registro_alumno");
        localStorage.removeItem("registro_tutor");
        Swal.fire({
            title: "Cuentas eliminadas",
            text: "Cuentas borradas de forma exitosas",
            icon: "success"
        })
    }

    let btnInicio = document.getElementById("btnInicio");
    btnInicio.onclick = (e) => {
        e.preventDefault();
        Formulario();
    }

    let btnCerrar = document.getElementById("btnCerrar");
    btnCerrar.onclick = (e) =>{
        e.preventDefault();
        Cerrar();
    }

    let btnEliminar = document.getElementById("btnEliminar");
    btnEliminar.onclick = (e) =>{
        e.preventDefault();
        Eliminar();
    }

    function Registrarse(){
        let nombre = document.getElementById("registerName").value;
        let apellido = document.getElementById("registerSurname").value;
        let tipo = document.getElementById("registerRole").value;
        let dni_alumno = document.getElementById("dniAlumno").value
        let dni = document.getElementById("registerDni").value;
        let correo_electronico = document.getElementById("registerEmail").value;
        let contraseña = document.getElementById("registerPassword").value;

        if(nombre == "" || apellido == "" || tipo == "" ||  dni == "" || correo_electronico == "" || contraseña == ""){
            Swal.fire({
                title: "Datos faltantes",
                text: "Ingrese todos los datos correspondientes",
                icon: "warning"
            })             
        }else{
            if(tipo == "alumno"){
                Swal.fire({
                    title: "Registro como alumno completo",
                    text: "Bienvenido a nuestro sistema",
                    icon: "success"
                })                
                let login = new Registro(nombre, apellido, tipo, dni, dni_alumno, correo_electronico, contraseña);
                listaRegistro.push(login);
                localStorage.setItem("registro_alumno", JSON.stringify(listaRegistro));
            }else{
                Swal.fire({
                    title: "Registro como tutor completado",
                    text: "Bienvenido a nuestro sistema",
                    icon: "success"
                })  
                let login = new Registro(nombre, apellido, tipo, dni, dni_alumno, correo_electronico, contraseña);
                listaRegistro.push(login);
                localStorage.setItem("registro_tutor", JSON.stringify(listaRegistro));
            }
        }
    }

    let btnRegistrarse = document.getElementById("btnRegistrarse");
    btnRegistrarse.onclick = (e) =>{
        e.preventDefault();
        Registrarse();
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
        window.location.href = './pages/tutor.html';
    } else {
        // Aquí puedes procesar el registro del alumno si no es tutor
        alert('Registro completado como Alumno.');
    }
});