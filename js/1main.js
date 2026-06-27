/* ===========================
    Scroll-triggered animations
   =========================== */
const hiddenElements = document.querySelectorAll('.hidden');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

/* ===========================
    Observe hidden elements
=========================== */
hiddenElements.forEach(el => observer.observe(el));

window.addEventListener('load', () => {

    setTimeout(() => {
        document.getElementById('loader').style.opacity = '0';

        setTimeout(() => {
            document.getElementById('loader').style.display = 'none';
        }, 800);

    }, 1800);

});

/* ===========================
    Image modal functionality
=========================== */
/* ==========================
   MODAL
========================== */

const modal = document.getElementById("imageModal");
const modalImage = document.getElementById("modalImage");

const modalTitle = document.getElementById("modalTitle");
const modalTools = document.getElementById("modalTools");
const modalSkills = document.getElementById("modalSkills");
const modalDate = document.getElementById("modalDate");

const closeBtn = document.querySelector(".modal-close");

document.querySelectorAll(".lab-card").forEach(card => {

    card.addEventListener("click", () => {

        modalImage.src = card.dataset.image;

        modalTitle.textContent = card.dataset.title;

        modalTools.textContent = card.dataset.tools;

        modalSkills.textContent = card.dataset.skills;

        modalDate.textContent = card.dataset.date;

        modal.style.display = "flex";

    });

});

if (closeBtn) {

    closeBtn.addEventListener("click", () => {

        modal.style.display = "none";

        modalImage.src = "";

    });

}

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

        modalImage.src = "";

    }

});



/* ===========================
    Intro line animations
=========================== */

/* ==========================
   CAROUSEL
========================== */

const track = document.querySelector(".carousel-track");
const leftBtn = document.querySelector(".carousel-arrow.left");
const rightBtn = document.querySelector(".carousel-arrow.right");

if (track && leftBtn && rightBtn) {

    rightBtn.addEventListener("click", () => {

        track.scrollLeft += 350;

    });

    leftBtn.addEventListener("click", () => {

        track.scrollLeft -= 350;

    });

}
/*
cards.forEach(card => {

    card.addEventListener("click", () => {

        const imagePath = card.dataset.image;

        console.log(imagePath);

        modalImage.src = imagePath;

        modal.style.display = "flex";

    });

});

/

/*************************
    NOTES MODAL
*************************/

document.addEventListener("DOMContentLoaded", () => {
    const noteModal = document.getElementById("noteModal");
    const noteTitle = document.getElementById("noteTitle");
    const noteText = document.getElementById("noteText");
    const noteClose = document.querySelector(".note-close");

    // Verificar si los elementos existen para evitar errores
    if (!noteModal || !noteTitle || !noteText) {
        console.error("No se encontraron los elementos del modal en el DOM");
        return;
    }

    document.querySelectorAll(".note-card").forEach(card => {
        card.addEventListener("click", () => {
            noteTitle.textContent = card.dataset.title;
            // .trim() ayuda a limpiar saltos de línea innecesarios al inicio/final
            noteText.innerHTML = card.dataset.content.trim().replace(/\n/g, "<br>");
            noteModal.style.display = "flex";
        });
    });

    if (noteClose) {
        noteClose.addEventListener("click", () => {
            noteModal.style.display = "none";
        });
    }

    window.addEventListener("click", (e) => {
        if (e.target === noteModal) {
            noteModal.style.display = "none";
        }
    });
});