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

    setInterval(nextSlide, 3000); 





"use strict";
(function () {
	window.onload = () => {
		const obj = document.querySelector("#gallery");
		const time = 10000;
		function animStart() {
			if (obj.classList.contains("active") == false) {
				obj.classList.add("active");
				setTimeout(() => {
					animEnd();
				}, time);
			}
		}
		function animEnd() {
			obj.classList.remove("active");
			obj.offsetWidth;
		}
		document.addEventListener("scroll", function () {
			// scroll or scrollend
			animStart();
		});
		window.addEventListener("resize", animStart);
		animStart();
	};
})();





function activarMenosDe500px() {
    console.log("La pantalla es menor a 1191px");
    var contenedorVisible = false; 

    document.getElementById('btnMostrar').addEventListener('click', function() {
      var contenedor = document.getElementById('contenedor2');
      var destino = document.getElementById('destinoContenedor2');
    
      if (contenedorVisible) {

        contenedor.style.height = '0';
        contenedor.addEventListener('transitionend', function() {
          contenedor.style.display = 'none';
        }, { once: true });
      } else {

        contenedor.style.display = 'block';
        contenedor.style.height = 'auto';
        contenedor.style.width = 'auto'; 
        destino.appendChild(contenedor); 
      }
    
      contenedorVisible = !contenedorVisible;
    });





    var enlaces = document.querySelectorAll('.enlace');
    
    enlaces.forEach(function(enlace) {
      enlace.addEventListener('click', function() {
        var subenlacesVisible = this.querySelector('.subenlaces').classList.contains('mostrar');
        
        document.querySelectorAll('.subenlaces').forEach(function(subenlace) {
          subenlace.classList.remove('mostrar');
        });
    

        if (!subenlacesVisible) {
          this.querySelector('.subenlaces').classList.add('mostrar');
        }
      });
    });
 


    const buscador = document.getElementById('buscador');
    const tarjetas = document.querySelectorAll('.card-materias');
    
    buscador.addEventListener('input', function () {
      const searchText = buscador.value.toLowerCase();
      
      tarjetas.forEach((tarjeta) => {
        const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
    
        if (titulo.includes(searchText)) {
          tarjeta.style.display = 'block';
          tarjeta.classList.add('tarjeta-visible'); 
        } else {
          tarjeta.style.display = 'none';
          tarjeta.classList.remove('tarjeta-visible');
        }
      });
    

      if (searchText === '') {
        tarjetas.forEach((tarjeta) => {
          tarjeta.style.display = 'block';
          tarjeta.classList.remove('tarjeta-visible'); 
        });
      }
    });
    




    const btnMostrarmaterias = document.getElementById('btnMostrarmaterias');
    const caja1 = document.getElementById('caja1');
    const btnCerrar = document.getElementById('btnCerrar');

    // Mostrar la caja1
    btnMostrarmaterias.onclick = function() {
        caja1.style.display = 'block'; // Cambia a block para mostrar
    }

    // Ocultar la caja1
    btnCerrar.onclick = function() {
        caja1.style.display = 'none'; // Cambia a none para ocultar
    }



























  }
  
  function activarMasDe500px() {
    console.log("La pantalla es mayor o igual a 1191px");


    const buscador = document.getElementById('buscador');
    const tarjetas = document.querySelectorAll('.card-materias');
    
    buscador.addEventListener('input', function () {
      const searchText = buscador.value.toLowerCase();
      
      tarjetas.forEach((tarjeta) => {
        const titulo = tarjeta.querySelector('h3').textContent.toLowerCase();
    
        if (titulo.includes(searchText)) {
          tarjeta.style.display = 'block';
          tarjeta.classList.add('tarjeta-visible'); 
        } else {
          tarjeta.style.display = 'none';
          tarjeta.classList.remove('tarjeta-visible');
        }
      });
    
      if (searchText === '') {
        tarjetas.forEach((tarjeta) => {
          tarjeta.style.display = 'block'; 
          tarjeta.classList.remove('tarjeta-visible');
        });
      }
    });
    































    
  }
  
  function verificarAnchoPantalla() {
    var anchoPantalla = window.innerWidth;
  
    if (anchoPantalla < 500) {
      activarMenosDe500px();
    } else {
      activarMasDe500px();
    }
  }
    window.addEventListener('load', verificarAnchoPantalla);
  window.addEventListener('resize', verificarAnchoPantalla);
  





