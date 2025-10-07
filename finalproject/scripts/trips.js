// Members data - Adventure companies in Nicaragua
const membersData = [
    {
        "name": "San Juan Sur Rafting",
        "address": "San Juan River Base Camp",
        "cityStateZip": "Rivas, Nicaragua 48000",
        "phone": "+505 1234-5678",
        "website": "#",
        "image": "./images/mountain_juan.png",
        "membershipLevel": 3,
        "notes": "Rafting adventure, 2 days, Intermediate, $150–$250, Rating: 4.8"
    },
    {
        "name": "Cerro Negro Volcano Boarding",
        "address": "Cerro Negro Volcano Park",
        "cityStateZip": "Leon, Nicaragua 21000",
        "phone": "+505 2345-6789",
        "website": "#",
        "image": "./images/sandboarding-1.jpg",
        "membershipLevel": 2,
        "notes": "Extreme sports experience, 1 day, Advanced, $100–$150, Rating: 4.9"
    },
    {
        "name": "Selva Negra Cloud Forest",
        "address": "Selva Negra Ecological Reserve",
        "cityStateZip": "Matagalpa, Nicaragua 31000",
        "phone": "+505 3456-7890",
        "website": "#",
        "image": "./images/camping_n.jpg",
        "membershipLevel": 3,
        "notes": "Nature & hiking, 3 days, Moderate, $200–$300, Rating: 4.7"
    },
    {
        "name": "Rio Coco Whitewater Rafting",
        "address": "Rio Coco Adventure Base",
        "cityStateZip": "Nueva Segovia, Nicaragua 37000",
        "phone": "+505 4567-8901",
        "website": "#",
        "image": "./images/g.jpg",
        "membershipLevel": 3,
        "notes": "Rafting, 2 days, Advanced, $180–$250, Rating: 4.9"
    },
    {
        "name": "Masaya Volcano Night Tour",
        "address": "Masaya Volcano National Park",
        "cityStateZip": "Masaya, Nicaragua 41000",
        "phone": "+505 5678-9012",
        "website": "#",
        "image": "./images/hiking.jfif",
        "membershipLevel": 1,
        "notes": "Adventure & sightseeing, 4 hours, Easy, $50–$80, Rating: 4.6"
    },
    {
        "name": "Ometepe Island Hiking",
        "address": "Ometepe Island Ferry Terminal",
        "cityStateZip": "Rivas, Nicaragua 48000",
        "phone": "+505 6789-0123",
        "website": "#",
        "image": "./images/e.jpg",
        "membershipLevel": 2,
        "notes": "Hiking, 1–2 days, Moderate, $120–$200, Rating: 4.7"
    },
    {
        "name": "Laguna de Apoyo Kayaking",
        "address": "Laguna de Apoyo Waterfront",
        "cityStateZip": "Masaya, Nicaragua 41000",
        "phone": "+505 7890-1234",
        "website": "#",
        "image": "./images/salmon.jpg",
        "membershipLevel": 1,
        "notes": "Water sports, Half day, Easy, $60–$90, Rating: 4.5"
    },
    {
        "name": "Indio Maíz Rainforest Expedition",
        "address": "Indio Maíz Biological Station",
        "cityStateZip": "Río San Juan, Nicaragua 52000",
        "phone": "+505 8901-2345",
        "website": "#",
        "image": "./images/rivers.jpg",
        "membershipLevel": 3,
        "notes": "Jungle expedition, 4 days, Advanced, $250–$400, Rating: 4.9"
    },
    {
        "name": "Somoto Canyon Adventure",
        "address": "Somoto Canyon National Monument",
        "cityStateZip": "Madriz, Nicaragua 35000",
        "phone": "+505 9012-3456",
        "website": "#",
        "image": "./images/c.jpg",
        "membershipLevel": 1,
        "notes": "Adventure & hiking, 1 day, Moderate, $100–$150, Rating: 4.8"
    },
    {
        "name": "Mombacho Volcano Cloud Forest",
        "address": "Mombacho Volcano Nature Reserve",
        "cityStateZip": "Granada, Nicaragua 43000",
        "phone": "+505 0123-4567",
        "website": "#",
        "image": "./images/h.jpg",
        "membershipLevel": 2,
        "notes": "Nature & hiking, 1 day, Moderate, $90–$140, Rating: 4.6"
    },
    {
        "name": "Apoyo Volcano Hiking Trail",
        "address": "Apoyo Lagoon Trailhead",
        "cityStateZip": "Masaya, Nicaragua 41000",
        "phone": "+505 1123-4567",
        "website": "#",
        "image": "./images/b.jpg",
        "membershipLevel": 1,
        "notes": "Hiking, 6 hours, Easy, $70–$100, Rating: 4.4"
    },
    {
        "name": "Rio San Juan Jungle Expedition",
        "address": "San Carlos River Port",
        "cityStateZip": "Río San Juan, Nicaragua 52000",
        "phone": "+505 2234-5678",
        "website": "#",
        "image": "./images/rd.jpg",
        "membershipLevel": 3,
        "notes": "Jungle expedition, 3 days, Advanced, $200–$350, Rating: 4.9"
    },
    {
        "name": "Bluefields Caribbean Surf",
        "address": "Bluefields Beach Resort",
        "cityStateZip": "South Caribbean, Nicaragua 81000",
        "phone": "+505 3345-6789",
        "website": "#",
        "image": "./images/surfing-1.jpg",
        "membershipLevel": 2,
        "notes": "Surfing, 2 days, Intermediate, $180–$220, Rating: 4.7"
    },
    {
        "name": "Esteli Coffee & Cigar Tour",
        "address": "Esteli Valley Coffee Farm",
        "cityStateZip": "Esteli, Nicaragua 33000",
        "phone": "+505 4456-7890",
        "website": "#",
        "image": "./images/f.jpg",
        "membershipLevel": 1,
        "notes": "Cultural & educational, 1 day, Easy, $80–$120, Rating: 4.5"
    },
    {
        "name": "Granada Colonial Heritage Walk",
        "address": "Granada Central Park",
        "cityStateZip": "Granada, Nicaragua 43000",
        "phone": "+505 5567-8901",
        "website": "#",
        "image": "./images/d.jpg",
        "membershipLevel": 1,
        "notes": "Cultural & walking, 3 hours, Easy, $40–$60, Rating: 4.6"
    }
];

// DOM elements
const directoryContent = document.getElementById('directoryContent');
const gridBtn = document.getElementById('gridBtn');
const listBtn = document.getElementById('listBtn');
const searchInput = document.getElementById('searchInput');

// Initialize the directory when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing directory...');
    
    // Initialize with grid view
    renderGridView();
    
    // Add event listeners for view toggle buttons
    gridBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            listBtn.classList.remove('active');
            renderGridView();
        }
    });
    
    listBtn.addEventListener('click', function() {
        if (!this.classList.contains('active')) {
            this.classList.add('active');
            gridBtn.classList.remove('active');
            renderListView();
        }
    });
    
    // Add event listener for search
    searchInput.addEventListener('input', function() {
        filterMembers(this.value);
    });
    
    // Update date and time
    updateDateTime();
    setInterval(updateDateTime, 60000); // Update every minute
});

// Function to render grid view WITH ACTUAL IMAGES
function renderGridView() {
    console.log('Rendering grid view with', membersData.length, 'items');
    
    let gridHTML = '<div class="grid-view">';
    
    if (membersData.length === 0) {
        gridHTML = '<div class="no-results">No companies found.</div>';
    } else {
        membersData.forEach(member => {
            gridHTML += `
                <div class="grid-card">
                    <div class="card-image">
                        <img src="${member.image}" alt="${member.name}" class="company-logo">
                        <div class="image-fallback">${member.name.substring(0, 2)}</div>
                    </div>
                    <div class="card-content">
                        <h3>${member.name}</h3>
                        <p class="address">${member.address}</p>
                        <p class="city-state">${member.cityStateZip}</p>
                        <p class="phone">${member.phone}</p>
                        <div class="card-actions">
                            <a href="${member.website}" class="website-btn">Visit Website</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
        gridHTML += '</div>';
    }
    
    directoryContent.innerHTML = gridHTML;
    console.log('Grid view rendered successfully');
}

// Function to render list view - TABLE FORMAT 4x4
function renderListView() {
    console.log('Rendering list view with', membersData.length, 'items');
    
    let listHTML = `
        <div class="list-view">
            <div class="table-container">
                <div class="table-header">
                    <div class="table-cell name-header">Name</div>
                    <div class="table-cell address-header">Address</div>
                    <div class="table-cell phone-header">Phone</div>
                    <div class="table-cell website-header">Website</div>
                </div>
                <div class="table-body">
    `;
    
    if (membersData.length === 0) {
        listHTML = '<div class="no-results">No companies found.</div>';
    } else {
        membersData.forEach(member => {
            listHTML += `
                <div class="table-row">
                    <div class="table-cell name-cell">
                        <strong>${member.name}</strong>
                    </div>
                    <div class="table-cell address-cell">
                        <div>${member.address}</div>
                        <div class="city-state">${member.cityStateZip}</div>
                    </div>
                    <div class="table-cell phone-cell">
                        ${member.phone}
                    </div>
                    <div class="table-cell website-cell">
                        <a href="${member.website}" class="website-link">Visit Website</a>
                    </div>
                </div>
            `;
        });
        
        listHTML += `
                </div>
            </div>
        </div>
        `;
    }
    
    directoryContent.innerHTML = listHTML;
    console.log('List view rendered successfully');
}

// Function to filter members based on search input
function filterMembers(searchTerm) {
    const filteredData = membersData.filter(member => 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.address.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Update the displayed data
    if (gridBtn.classList.contains('active')) {
        renderFilteredGridView(filteredData);
    } else {
        renderFilteredListView(filteredData);
    }
}

// Function to render filtered grid view
function renderFilteredGridView(filteredData) {
    let gridHTML = '<div class="grid-view">';
    
    if (filteredData.length === 0) {
        gridHTML = '<div class="no-results">No results found for your search.</div>';
    } else {
        filteredData.forEach(member => {
            gridHTML += `
                <div class="grid-card">
                    <div class="card-image">
                        <img src="${member.image}" alt="${member.name}" class="company-logo">
                        <div class="image-fallback">${member.name.substring(0, 2)}</div>
                    </div>
                    <div class="card-content">
                        <h3>${member.name}</h3>
                        <p class="address">${member.address}</p>
                        <p class="city-state">${member.cityStateZip}</p>
                        <p class="phone">${member.phone}</p>
                        <div class="card-actions">
                            <a href="${member.website}" class="website-btn">Visit Website</a>
                        </div>
                    </div>
                </div>
            `;
        });
        
        gridHTML += '</div>';
    }
    
    directoryContent.innerHTML = gridHTML;
}

// Function to render filtered list view
function renderFilteredListView(filteredData) {
    let listHTML = `
        <div class="list-view">
            <div class="table-container">
                <div class="table-header">
                    <div class="table-cell name-header">Name</div>
                    <div class="table-cell address-header">Address</div>
                    <div class="table-cell phone-header">Phone</div>
                    <div class="table-cell website-header">Website</div>
                </div>
                <div class="table-body">
    `;
    
    if (filteredData.length === 0) {
        listHTML = '<div class="no-results">No results found for your search.</div>';
    } else {
        filteredData.forEach(member => {
            listHTML += `
                <div class="table-row">
                    <div class="table-cell name-cell">
                        <strong>${member.name}</strong>
                    </div>
                    <div class="table-cell address-cell">
                        <div>${member.address}</div>
                        <div class="city-state">${member.cityStateZip}</div>
                    </div>
                    <div class="table-cell phone-cell">
                        ${member.phone}
                    </div>
                    <div class="table-cell website-cell">
                        <a href="${member.website}" class="website-link">Visit Website</a>
                    </div>
                </div>
            `;
        });
        
        listHTML += `
                </div>
            </div>
        </div>
        `;
    }
    
    directoryContent.innerHTML = listHTML;
}

// Function to update date and time
function updateDateTime() {
    const now = new Date();
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    
    if (dateElement) {
        dateElement.textContent = now.toLocaleDateString();
    }
    
    if (timeElement) {
        timeElement.textContent = now.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    }
}