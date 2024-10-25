      // Simulación de sesión de administrador
      
      let Esadmin = document.getElementById('Esadmin');
     
      if(localStorage.getItem("admin")){
          Esadmin.style.display='block';
      }else{
          Esadmin.style.display='none';
      
      }
      // Función para restaurar el color original al cerrar sesión
      function cerrarSesion() {
          document.getElementById('main-body').style.backgroundColor = ''; // Restaurar color original
      }

      /*if(localStorage.getItem("Admin"))){
      
      }
      */