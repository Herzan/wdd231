// trips.js
import { setupModal } from './modal.js';

const modalController = setupModal();
const tripsContainer = document.querySelector('#trips-container');

// Fetch trips data
async function fetchTrips() {
  try {
    const res = await fetch('./data/trips.json');
    if (!res.ok) throw new Error('Failed to fetch trips data');
    const data = await res.json();
    displayTrips(data.trips);
  } catch (error) {
    tripsContainer.innerHTML = `<p>Error loading trips: ${error.message}</p>`;
  }
}

// Display trips dynamically
function displayTrips(trips) {
  trips.slice(0, 15).forEach((trip) => {
    const tripCard = document.createElement('div');
    tripCard.classList.add('trip-card');
    tripCard.innerHTML = `
      <img src="${trip.image}" alt="${trip.name}" class="card-img">
      <h3>${trip.name}</h3>
      <p><strong>Location:</strong> ${trip.location}</p>
      <p><strong>Duration:</strong> ${trip.duration}</p>
      <p><strong>Price:</strong> ${trip.price}</p>
      <button class="details-btn">View Details</button>
    `;
    tripsContainer.appendChild(tripCard);

    const detailsBtn = tripCard.querySelector('.details-btn');
    detailsBtn.addEventListener('click', () => {
      modalController.openModal(`
        <img src="${trip.image}" alt="${trip.name}" style="width:100%;border-radius:10px;margin-bottom:15px;">
        <h2>${trip.name}</h2>
        <p><strong>Location:</strong> ${trip.location}</p>
        <p><strong>Duration:</strong> ${trip.duration}</p>
        <p><strong>Price:</strong> ${trip.price}</p>
        <p><strong>Membership:</strong> ${trip.membershipName} (Level ${trip.membershipLevel})</p>
        <p>${trip.notes}</p>
      `);
    });
  });

  localStorage.setItem('trips', JSON.stringify(trips));
}

// Initialize
fetchTrips();
