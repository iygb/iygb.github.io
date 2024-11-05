let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(n) {
      slides[currentSlide].classList.remove('active');
      currentSlide = (n + totalSlides) % totalSlides;
      slides[currentSlide].classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 3000); // Cambiar de slide cada 3 segundos




    







































    

// Código para activarse cuando el ancho de la pantalla sea menor a 500px
function activarMenosDe500px() {
    console.log("La pantalla es menor a 1191px");

 

    var contenedorVisible = false; // Variable para rastrear el estado del contenedor

    document.getElementById('btnMostrar').addEventListener('click', function() {
      var contenedor = document.getElementById('contenedor2');
      var destino = document.getElementById('destinoContenedor2');
    
      if (contenedorVisible) {
        // Ocultar el contenedor
        contenedor.style.height = '0';
        contenedor.addEventListener('transitionend', function() {
          contenedor.style.display = 'none';
        }, { once: true });
      } else {
        // Mostrar el contenedor
        contenedor.style.display = 'block';
        contenedor.style.height = 'auto';
        contenedor.style.width = 'auto'; // Establecer altura automática al mostrar
        destino.appendChild(contenedor); // Mover el contenedor al destino
      }
    
      // Alternar el estado del contenedor
      contenedorVisible = !contenedorVisible;
    });
    
    





  
    
    // Obtener todos los elementos con la clase "enlace"
    var enlaces = document.querySelectorAll('.enlace');
    
    // Iterar sobre cada enlace para agregar un evento de clic
    enlaces.forEach(function(enlace) {
      enlace.addEventListener('click', function() {
        // Verificar si los subenlaces del enlace actual están visibles
        var subenlacesVisible = this.querySelector('.subenlaces').classList.contains('mostrar');
        
        // Ocultar todos los subenlaces primero
        document.querySelectorAll('.subenlaces').forEach(function(subenlace) {
          subenlace.classList.remove('mostrar');
        });
    
        // Mostrar u ocultar los subenlaces del enlace actual
        if (!subenlacesVisible) {
          this.querySelector('.subenlaces').classList.add('mostrar');
        }
      });
    });
 







































































  }
  
  // Código para activarse cuando el ancho de la pantalla sea mayor o igual a 500px
  function activarMasDe500px() {
    console.log("La pantalla es mayor o igual a 1191px");
    // Coloca aquí las acciones que deseas ejecutar cuando la pantalla sea mayor o igual a 500px




















































  }
  
  // Función para verificar el ancho de la pantalla y activar las funciones correspondientes
  function verificarAnchoPantalla() {
    var anchoPantalla = window.innerWidth;
  
    if (anchoPantalla < 500) {
      activarMenosDe500px();
    } else {
      activarMasDe500px();
    }
  }
  
  // Llama a la función para verificar el ancho de la pantalla al cargar la página y al cambiar el tamaño de la ventana
  window.addEventListener('load', verificarAnchoPantalla);
  window.addEventListener('resize', verificarAnchoPantalla);
  