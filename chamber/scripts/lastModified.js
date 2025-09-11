// Get the span element by its ID (all lowercase)
const lastmodifiedElement = document.getElementById('lastmodified');

// Check if the element exists
if (lastmodifiedElement) {
  // Get the last modified date of the document
  const lastmodifiedDate = new Date(document.lastModified); // property must stay 'lastModified'

  // Format the date nicely
  lastmodifiedElement.textContent = lastmodifiedDate.toLocaleString();
}
