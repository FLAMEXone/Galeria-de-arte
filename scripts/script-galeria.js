//objeto con un mocked de la data de las pinturas para el modal
const dataPinturas = {
  elbosco: {
    titulo: "El Jardín de las Delicias – El Bosco",
    descripcion:
      "Una de las obras más enigmáticas del arte flamenco, pintada por El Bosco hacia 1500. Representa el paraíso, la vida terrenal y el infierno en un tríptico lleno de simbolismo y surrealismo.",
  },
  granOla: {
    titulo: "La gran ola de Kanagawa – Hokusai",
    descripcion:
      "Una icónica estampa japonesa del período Edo, creada por Hokusai. Representa una enorme ola a punto de caer sobre unos botes, con el monte Fuji al fondo.",
  },
  guernica: {
    titulo: "Guernica – Pablo Picasso",
    descripcion:
      "Pintado en 1937 como denuncia del bombardeo de Guernica durante la Guerra Civil Española. Es una poderosa representación del horror de la guerra y el sufrimiento humano.",
  },
  nocheEstrellada: {
    titulo: "La noche estrellada – Vincent van Gogh",
    descripcion:
      "Una de las obras más famosas de Van Gogh, pintada desde la ventana de su habitación en un asilo en 1889. Expresa el mundo interior del artista con un cielo lleno de energía y movimiento.",
  },
  entierroConde: {
    titulo: "El entierro del Conde de Orgaz – El Greco",
    descripcion:
      "Obra maestra del manierismo español, creada en 1586. Combina lo celestial y lo terrenal en una impresionante escena fúnebre, ubicada en la Iglesia de Santo Tomé en Toledo.",
  },
};

//modal
const modal = document.getElementById("modalInfo");
const modalTitulo = document.getElementById("modalTitulo");
const modalDescripcion = document.getElementById("modalDescripcion");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".info-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-pintura");
    const pintura = dataPinturas[key];
    if (pintura) {
      modalTitulo.textContent = pintura.titulo;
      modalDescripcion.textContent = pintura.descripcion;
      modal.style.display = "block";
    }
  });
});

//cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

//cerrar modal al hacer click fuera de él
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

//ocultar/mostrar imagenes
document.querySelectorAll(".hide-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const imageId = btn.getAttribute("data-imagen");
    const image = document.getElementById(imageId);
    const icon = btn.querySelector("i");

    if (image.style.display === "none") {
      image.style.display = "block";
      icon.className = "fa-solid fa-eye-slash fa-lg";
      btn.innerHTML =
        '<i class="fa-solid fa-eye-slash fa-lg" style="color: #560071;"></i> Ocultar';
    } else {
      image.style.display = "none";
      icon.className = "fa-solid fa-eye fa-lg";
      btn.innerHTML =
        '<i class="fa-solid fa-eye fa-lg" style="color: #560071;"></i> Mostrar';
    }
  });
});
