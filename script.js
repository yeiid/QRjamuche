function setTheme(theme) {
    document.documentElement.className = `theme-${theme}`;
    localStorage.setItem('theme', theme);
    
    // Marcar el botón activo
    document.querySelectorAll(".theme-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.theme-btn.${theme}`).classList.add("active");
}

// Cargar el tema guardado
const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);
