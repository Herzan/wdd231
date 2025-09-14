// ===========================
// Grid / List Toggle
// ===========================
const gridSelector = document.querySelector('#directory-grid');
const listSelector = document.querySelector('#directory-list');
const directoryData = document.querySelector('#directory-data');

gridSelector.addEventListener('click', () => {
  if (!gridSelector.classList.contains('active')) {
    gridSelector.classList.add('active');
    listSelector.classList.remove('active');
    directoryData.classList.add('directory-cards');
    directoryData.classList.remove('directory-list');
  }
});

listSelector.addEventListener('click', () => {
  if (!listSelector.classList.contains('active')) {
    listSelector.classList.add('active');
    gridSelector.classList.remove('active');
    directoryData.classList.add('directory-list');
    directoryData.classList.remove('directory-cards');
  }
});

// ===========================
// Membership Filter
// ===========================
const membershipButtons = document.querySelectorAll('.membership-btn');

membershipButtons.forEach(button => {
  button.addEventListener('click', () => {
    const level = button.dataset.level;

    membershipButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const allCards = document.querySelectorAll('.business-card');
    allCards.forEach(card => {
      if (level === "All" || card.dataset.membership === level) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// ===========================
// Fetch Businesses from JSON
// ===========================
document.addEventListener("DOMContentLoaded", getBusinessData);

async function getBusinessData() {
  try {
    const response = await fetch("./data/business.json");
    if (!response.ok) throw new Error("Error loading business.json");
    const data = await response.json();

    displayBusinesses(data.businesses);
  } catch (error) {
    console.error(error);
    directoryData.innerHTML = `<section><h1>There was an error loading the data</h1></section>`;
  }
}

// ===========================
// Display Businesses
// ===========================
function displayBusinesses(businesses) {
  directoryData.innerHTML = ""; // clear previous content

  businesses.forEach(b => {
    const card = document.createElement("section");
    card.classList.add("business-card");
    card.dataset.membership = b.membershipName; // for filtering

    // Set border color based on membership
    let borderColor;
    switch(b.membershipName) {
      case "Gold": borderColor = "gold"; break;
      case "Silver": borderColor = "silver"; break;
      default: borderColor = "gray"; // Bronze
    }

    card.style.border = `3px solid ${borderColor}`;
    card.style.borderRadius = "10px";
    card.style.padding = "12px";
    card.style.marginBottom = "20px";
    card.style.backgroundColor = "#fdfdfd";
    card.style.transition = "transform 0.3s, box-shadow 0.3s";

    // Hover effect
    card.addEventListener("mouseenter", () => {
      card.style.transform = "scale(1.03)";
      card.style.boxShadow = "0 4px 20px rgba(0,0,0,0.2)";
    });
    card.addEventListener("mouseleave", () => {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "none";
    });

    card.innerHTML = `
      <h3>${b.name}</h3>
      <img src="${b.image}" alt="${b.name}" width="200" height="200">
      <p><strong>Category:</strong> ${b.category}</p>
      <p><strong>Address:</strong> ${b.address}, ${b.cityStateZip}</p>
      <p><strong>Phone:</strong> ${b.phone}</p>
      <p><strong>Email:</strong> <a href="mailto:${b.email}">${b.email}</a></p>
      <p><strong>Website:</strong> <a href="${b.website}" target="_blank">Visit</a></p>
      <p>${b.notes}</p>
      <p class="membership-level" style="text-align:center; font-weight:bold; color:${borderColor};">
        Membership Level: ${b.membershipName}
      </p>
    `;

    directoryData.appendChild(card);
  });
}
