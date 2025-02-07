// Swiper para el carrusel
new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".btn-ver-mas");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const card = this.closest(".experience-card");
            card.classList.toggle("expanded");

            // Cambiar texto del botón según el estado
            this.textContent = card.classList.contains("expanded") ? "Ver menos" : "Ver más";
        });
    });
});

const testimonios = [
    {
      nombre: "Juan Pérez",
      comentario: "Una experiencia increíble. Volveré sin duda.",
      imagen: "../assets/img/user1.png",
      verificado: "Compra verificada",
      estrellas: 4
    },
    {
      nombre: "María Gómez",
      comentario: "Todo fue perfecto, muy recomendable.",
      imagen: "../assets/img/user2.png",
      verificado: "Compra verificada",
      estrellas: 5
    },
    {
      nombre: "Carlos Rodríguez",
      comentario: "Buena atención y servicio, aunque algo caro.",
      imagen: "../assets/img/user3.png",
      verificado: "Compra verificada",
      estrellas: 3
    }
  ];
  
  let indiceActual = 0;
  
  document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            name: "Carlos Rodríguez",
            image: "../assets/img/iconopersona.webp",
            text: "Buena atención y servicio, aunque algo caro.",
            stars: 3
        },
        {
            name: "María Gómez",
            image: "../assets/img/iconopersona3.webp",
            text: "Todo fue perfecto, muy recomendable.",
            stars: 5
        },
        {
            name: "Juan Pérez",
            image: "../assets/img/iconopersona2.webp",
            text: "No fue lo que esperaba, pero estuvo bien.",
            stars: 4
        }
    ];

    let currentIndex = 0;
    const nameElement = document.querySelector(".client-name");
    const textElement = document.querySelector(".client-comment");
    const imgElement = document.querySelector(".user-image");
    const starsElement = document.querySelector(".stars");

    function updateTestimonial(index) {
        const testimonial = testimonials[index];

        nameElement.textContent = testimonial.name;
        textElement.textContent = testimonial.text;

        // Verificar si la imagen existe antes de cambiarla
        const img = new Image();
        img.src = testimonial.image;
        img.onload = () => imgElement.src = testimonial.image;
        img.onerror = () => imgElement.src = "usuario-default.jpg"; // Imagen por defecto si no existe

        let starsHtml = "";
        for (let i = 1; i <= 5; i++) {
            starsHtml += `<span class="star ${i <= testimonial.stars ? "filled" : ""}">★</span>`;
        }
        starsElement.innerHTML = starsHtml;
    }

    document.getElementById("nextTestimonial").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    document.getElementById("prevTestimonial").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        updateTestimonial(currentIndex);
    });

    // Cargar la primera reseña al inicio
    updateTestimonial(currentIndex);
});




  


