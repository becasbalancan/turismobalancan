/* =========================
   CONFIGURACIÓN GLOBAL
========================= */
const ROOT = "/turismobalancan/";

function cargarComponente(id, ruta) {
    fetch(ruta)
        .then(res => {
            if (!res.ok) {
                throw new Error("No se pudo cargar " + ruta);
            }
            return res.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {

    cargarComponente("header", ROOT + "components/header.html");
    cargarComponente("sidebar", ROOT + "components/sidebar.html");
    cargarComponente("footer", ROOT + "components/footer.html");

    if (typeof cargarAtractivos === "function") {
        cargarAtractivos();
    }

    const slides = document.querySelectorAll(".slide");

    if (slides.length > 0) {
        let currentSlide = 0;

        setInterval(() => {
            slides[currentSlide].classList.remove("active");
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add("active");
        }, 4000);
    }
});






