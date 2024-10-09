function updateClipPath() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Fonction pour arrondir les valeurs
    function round(value) {
        return Math.round(value);
    }

    // Définir un chemin dynamique basé sur la taille de la fenêtre
    const newPathData = `M 0 0 H ${round(0.91 * width)} V ${round(0.07 * height)} 
    Q ${round(0.91 * width)} ${round(0.17 * height)} ${round(0.84 * width)} ${round(0.21 * height)} 
    l ${round(-0.08 * width)} ${round(0.05 * height)} 
    Q ${round(0.26 * width)} ${round(0.56 * height)} ${round(0.50 * width)} ${round(0.73 * height)} 
    Q ${round(0.78 * width)} ${round(0.93 * height)} ${round(0.50 * width)} ${round(1.13 * height)} 
    L ${round(0.37 * width)} ${round(1.23 * height)} 
    Q ${round(0.19 * width)} ${round(1.37 * height)} 0 ${round(1.13 * height)} Z`;

    // Mettre à jour le chemin du clipPath dans le SVG
    const pathElement = document.querySelector("#myClipPath path");
    if (pathElement) {
        pathElement.setAttribute("d", newPathData);
        console.log("Nouveau chemin SVG appliqué :", newPathData);
    } else {
        console.error("L'élément SVG #myClipPath n'a pas été trouvé !");
    }
}

// Mettre à jour le clip-path lors du chargement de la page
window.onload = function() {
    updateClipPath();
    window.onresize = function() {
        updateClipPath(); // Met à jour le chemin lors du redimensionnement de la fenêtre
    };
};