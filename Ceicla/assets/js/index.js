      // Simulación de sesión de administrador
      const esAdmin = false; // Simulación de sesión de administrador
      
      let Esadmin = document.getElementById('Esadmin');
     
      if(esAdmin){
          Esadmin.style.display='block';
      }else{
          Esadmin.style.display='none';
      
      }
      // Función para restaurar el color original al cerrar sesión
      function cerrarSesion() {
          document.getElementById('main-body').style.backgroundColor = ''; // Restaurar color original
      }