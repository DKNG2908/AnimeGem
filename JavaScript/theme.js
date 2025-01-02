// Attendre que le DOM soit chargé
document.addEventListener("DOMContentLoaded", () => {
    const themeToggleButton = document.getElementById("theme-toggle");

    // Vérifier si le thème sombre est déjà activé (stocké dans le localStorage)
    const isDarkTheme = localStorage.getItem("dark-theme") === "true";

    // Appliquer le thème sombre si nécessaire
    if (isDarkTheme) {
        document.body.classList.add("dark-theme");
    }

    // Changer de thème au clic
    themeToggleButton.addEventListener("click", () => {
        // Basculer la classe dark-theme
        document.body.classList.toggle("dark-theme");

        // Sauvegarder l'état du thème dans le localStorage
        const isDark = document.body.classList.contains("dark-theme");
        localStorage.setItem("dark-theme", isDark ? "true" : "false");
    });
});
