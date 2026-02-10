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

    const basePath = "/turismobalancan/components/";

    cargarComponente("header", basePath + "header.html");
    cargarComponente("sidebar", basePath + "sidebar.html");
    cargarComponente("footer", basePath + "footer.html");

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
        }, 5000);
    }
});




