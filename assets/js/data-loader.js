function cargarAtractivos() {
    fetch(ROOT + "data/atractivos.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON");
            }
            return response.json();
        })
        .then(data => {
            const contenedor = document.getElementById("lugares-container");

            data.forEach(lugar => {

                const link = document.createElement("a");
                link.href = lugar.url;
                link.classList.add("lugar-link");

                const card = document.createElement("div");
                card.classList.add("card-lugar");

                const imgSrc = lugar.imagen || "assets/img/ui/placeholder.jpg";

                card.innerHTML = `
                    <img src="${imgSrc}" alt="${lugar.nombre}"
                         onerror="this.src='assets/img/ui/placeholder.jpg'">
                    <h4>${lugar.nombre}</h4>
                    <p>${lugar.categoria}</p>
                `;

                link.appendChild(card);        // ✅ ENVUELVE LA CARD
                contenedor.appendChild(link); // ✅ AGREGA EL LINK
            });
        })
        .catch(error => {
            console.error("Error:", error);
        });
}

