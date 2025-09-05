// course.js

// ✅ Course Data
const courses = [
  { code: "CSE110", name: "Introduction to Programming", credits: 2, subject: "CSE", completed: true },
  { code: "CSE210", name: "Programming with Classes", credits: 2, subject: "CSE", completed: false },
  { code: "WDD130", name: "Web Fundamentals", credits: 2, subject: "WDD", completed: true },
  { code: "WDD231", name: "Frontend Development", credits: 3, subject: "WDD", completed: false },
  { code: "CSE270", name: "Data Structures", credits: 3, subject: "CSE", completed: false },
];

// ✅ Grab containers
const courseContainer = document.getElementById("courseList");
const creditDisplay = document.getElementById("totalCredits");

// ✅ Display Courses
function displayCourses(courseArray) {
  courseContainer.innerHTML = "";

  if (courseArray.length === 0) {
    courseContainer.innerHTML = `<p class="no-courses">No courses available for this filter.</p>`;
    creditDisplay.textContent = "Total Credits: 0";
    return;
  }

  courseArray.forEach(course => {
    const courseItem = document.createElement("div");
    courseItem.classList.add("course");

    // Mark completed visually
    if (course.completed) {
      courseItem.classList.add("completed");
    }

    courseItem.innerHTML = `
      <h3>${course.code}: ${course.name}</h3>
      <p><strong>Credits:</strong> ${course.credits}</p>
      <p><strong>Subject:</strong> ${course.subject}</p>
      <p class="status">${course.completed ? "✅ Completed" : "📘 In Progress"}</p>
    `;

    courseContainer.appendChild(courseItem);
  });

  // Update credits dynamically
  displayCredits(courseArray);
}

// ✅ Display Credits with Reduce
function displayCredits(courseArray) {
  const totalCredits = courseArray.reduce((sum, course) => sum + course.credits, 0);
  creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

// ✅ Filter Functionality
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const subject = button.dataset.subject;

      // Wayfinding: highlight active button
      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter courses
      let filteredCourses = [];
      if (subject === "all") {
        filteredCourses = courses;
      } else {
        filteredCourses = courses.filter(c => c.subject.toLowerCase() === subject.toLowerCase());
      }

      // Display filtered list + credits
      displayCourses(filteredCourses);
    });
  });
}

// ✅ Footer Info
function setupFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

// ✅ Init
displayCourses(courses);  // Default: show all
setupFilters();
setupFooter();
