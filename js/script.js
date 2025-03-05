// Swiper para el carrusel
new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Evento para botones "Ver más"
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".btn-ver-mas");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = this.closest(".experience-card");
      card.classList.toggle("expanded");

      this.textContent = card.classList.contains("expanded")
        ? "Ver menos"
        : "Ver más";
    });
  });
});

// Testimonios
const testimonios = [
  {
    nombre: "Juan Pérez",
    comentario: "Una experiencia increíble. Volveré sin duda.",
    imagen: "../assets/img/user1.png",
    verificado: "Compra verificada",
    estrellas: 4,
  },
  {
    nombre: "María Gómez",
    comentario: "Todo fue perfecto, muy recomendable.",
    imagen: "../assets/img/user2.png",
    verificado: "Compra verificada",
    estrellas: 5,
  },
  {
    nombre: "Carlos Rodríguez",
    comentario: "Buena atención y servicio, aunque algo caro.",
    imagen: "../assets/img/user3.png",
    verificado: "Compra verificada",
    estrellas: 3,
  },
];

let indiceActual = 0;

// Testimonios dinámicos
document.addEventListener("DOMContentLoaded", function () {
  const testimonials = [
    {
      name: "Carlos Rodríguez",
      image: "../assets/img/iconopersona.webp",
      text: "Buena atención y servicio, aunque algo caro.",
      stars: 3,
    },
    {
      name: "María Gómez",
      image: "../assets/img/iconopersona3.webp",
      text: "Todo fue perfecto, muy recomendable.",
      stars: 5,
    },
    {
      name: "Juan Pérez",
      image: "../assets/img/OUSI.jpg",
      text: "No fue lo que esperaba, pero estuvo bien.",
      stars: 4,
    },
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

    const img = new Image();
    img.src = testimonial.image;
    img.onload = () => (imgElement.src = testimonial.image);
    img.onerror = () => (imgElement.src = "usuario-default.jpg");

    let starsHtml = "";
    for (let i = 1; i <= 5; i++) {
      starsHtml += `<span class="star ${
        i <= testimonial.stars ? "filled" : ""
      }">★</span>`;
    }
    starsElement.innerHTML = starsHtml;
  }

  document
    .getElementById("nextTestimonial")
    .addEventListener("click", function () {
      currentIndex = (currentIndex + 1) % testimonials.length;
      updateTestimonial(currentIndex);
    });

  document
    .getElementById("prevTestimonial")
    .addEventListener("click", function () {
      currentIndex =
        (currentIndex - 1 + testimonials.length) % testimonials.length;
      updateTestimonial(currentIndex);
    });

  updateTestimonial(currentIndex);
});

// Filtros de experiencias
document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const experienceCards = document.querySelectorAll(".experience-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      experienceCards.forEach((card) => {
        if (
          category === "all" ||
          card.getAttribute("data-category") === category
        ) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});

// Validación del formulario de login
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const passwordInput = document.getElementById("password");
  const passwordHelp = document.getElementById("passwordHelp");
  const emailInput = document.getElementById("email");
  const emailHelp = document.getElementById("emailHelp");

  if (loginForm) {
    // Validación en tiempo real para email
    emailInput.addEventListener("input", function () {
      if (this.value.length === 0) {
        emailHelp.textContent = "";
        this.style.borderColor = "#ccc";
      } else if (!this.value.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailHelp.textContent = "Por favor, ingresa un correo electrónico válido.";
        emailHelp.style.color = "#dc3545";
        this.style.borderColor = "#dc3545";
      } else {
        emailHelp.textContent = "";
        this.style.borderColor = "#28a745";
      }
    });

    // Validación en tiempo real para contraseña
    passwordInput.addEventListener("input", function () {
      const password = this.value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/;

      if (password.length === 0) {
        passwordHelp.textContent = "";
        this.style.borderColor = "#ccc";
      } else if (!passwordRegex.test(password)) {
        passwordHelp.textContent =
          "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
        passwordHelp.style.color = "#dc3545";
        this.style.borderColor = "#dc3545";
      } else {
        passwordHelp.textContent = ""; // 🔥 Se borra el mensaje cuando es válida
        this.style.borderColor = "#28a745";
      }
    });

    // Validación del formulario al enviar
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = emailInput.value;
      const password = passwordInput.value;
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*_])[A-Za-z\d!@#$%^&*_]{8,}$/;

      let hasError = false;

      if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
        emailHelp.textContent = "Por favor, ingresa un correo electrónico válido.";
        emailHelp.style.color = "#dc3545";
        emailInput.style.borderColor = "#dc3545";
        hasError = true;
      } else {
        emailHelp.textContent = "";
        emailInput.style.borderColor = "#28a745";
      }

      if (!passwordRegex.test(password)) {
        passwordHelp.textContent =
          "La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y caracteres especiales.";
        passwordHelp.style.color = "#dc3545";
        passwordInput.style.borderColor = "#dc3545";
        hasError = true;
      } else {
        passwordHelp.textContent = ""; // ✅ BORRA EL MENSAJE AL SER VÁLIDA
        passwordInput.style.borderColor = "#28a745";
      }

      if (hasError) return;

      // ✅ Si todo es válido, reseteamos y limpiamos mensajes
      emailHelp.textContent = "";
      passwordHelp.textContent = "";
      alert("¡Bienvenido a FeelVenture!");
      loginForm.reset();
      emailInput.style.borderColor = "#ccc";
      passwordInput.style.borderColor = "#ccc";


      // 🔥 REDIRECCIÓN AL INDEX
      window.location.href = "index.html";
    });
  }
});
