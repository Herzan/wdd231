<script>
  // ================== FOOTER INFO ==================
  document.addEventListener("DOMContentLoaded", () => {
    // Última modificación
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
      const lastModifiedDate = new Date(document.lastModified);
      lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
    }

    // Si decides agregar un año actual dinámico
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    }
  });
</script>
