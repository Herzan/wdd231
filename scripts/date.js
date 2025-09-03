// ================== FOOTER INFO ==================

// Año actual
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Última modificación
const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleString()}`;
