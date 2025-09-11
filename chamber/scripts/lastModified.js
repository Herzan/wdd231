// Get the span element by its ID
const lastModifiedElement = document.getElementById('lastModified');

// Check if the element exists to avoid errors
if (lastModifiedElement) {
  // Get the last modified date of the document
  const lastModifiedDate = new Date(document.lastModified);

  // Format the date nicely
  lastModifiedElement.textContent = lastModifiedDate.toLocaleString();
}
