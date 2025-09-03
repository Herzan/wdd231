// Get the current year for the copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date and time
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString(); // Converts to local date and time string

// Display the last modified date and time in the footer
document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
