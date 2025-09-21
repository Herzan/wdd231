// ===========================
// Company Spotlight: Random Gold/Silver Members
// ===========================

async function getBusinessData() {
  try {
    // Fetch the correct JSON file
    const response = await fetch("./data/business.json"); // <-- corrected filename
    if (!response.ok) throw new Error("Error loading business.json");

    const data = await response.json();
    const businesses = data.businesses; // 'businesses' array inside JSON

    // Filter Gold and Silver members
    const goldSilverMembers = businesses.filter(
      b => b.membershipName === "Gold" || b.membershipName === "Silver"
    );

    // Randomly select 2–3 members
    function getRandomMembers(arr, minCount = 2, maxCount = 3) {
      const count = Math.min(arr.length, Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount);
      const shuffled = [...arr].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    }

    const spotlightMembers = getRandomMembers(goldSilverMembers);

    // Display members
    const container = document.getElementById("directory-data");
    container.innerHTML = ""; // Clear previous content

    spotlightMembers.forEach(b => {
      const card = document.createElement("div");

      // Determine border color
      let borderColor = b.membershipName === "Gold" ? "gold" :
                        b.membershipName === "Silver" ? "silver" : "gray";

      // Card styling
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

      // Card content
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

      container.appendChild(card);
    });

  } catch (error) {
    console.error(error);
    const container = document.querySelector("#directory-data");
    container.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

// Call the function
getBusinessData();
