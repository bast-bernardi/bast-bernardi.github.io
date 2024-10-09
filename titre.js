

const titleElement = document.getElementById("welcome-title");

// Liste des traductions de "Bienvenue" dans différentes langues
const languages = [
    "Bienvenue",       // Français
    "Bienvenido",      // Espagnol
    "Willkommen",      // Allemand
    "Benvenuto",       // Italien
    "欢迎",            // Chinois
    "ようこそ",        // Japonais
    "Välkommen",       // Suédois
	"Welcome"
];

let currentIndex = 0;

// Fonction pour changer le titre toutes les 3 secondes
function changeTitle() {
    // Ajouter une animation de fondu
    titleElement.style.opacity = 0;
    
    setTimeout(() => {
        // Changer le texte après 1 seconde d'animation de fondu
        titleElement.textContent = languages[currentIndex];
        titleElement.style.opacity = 1;
        
        // Passer à la langue suivante
        currentIndex = (currentIndex + 1) % languages.length;
    }, 1000);  // 1 seconde de délai pour l'animation
}

// Changer le titre toutes les 3 secondes
setInterval(changeTitle, 3000);
