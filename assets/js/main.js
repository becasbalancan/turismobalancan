function cargarComponente(id, ruta) {
    fetch(ruta)
        .then(res => res.text())
        .then(html => {
            document.getElementById(id).innerHTML = html;
        });
}

const basePath = window.location.pathname.includes("/turismobalancan//pages/")
    ? "../components/"
    : "components/";

document.addEventListener("DOMContentLoaded", () => {
    cargarComponente("header", basePath + "header.html");
    cargarComponente("sidebar", basePath + "sidebar.html");
    cargarComponente("footer", basePath + "footer.html");
    cargarAtractivos();
});

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");

}, 5000); // cambia cada 5 segundos
