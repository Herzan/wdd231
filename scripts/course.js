// ================== COURSE DATA ==================
const courses = [
  { code: 'WDD130', name: 'Web Fundamentals', credits: 2, completed: true },
  { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 2, completed: true },
  { code: 'CSE110', name: 'Intro to Programming', credits: 2, completed: false },
  { code: 'CSE111', name: 'Programming with Functions', credits: 2, completed: false },
  { code: 'WDD231', name: 'Frontend Development I', credits: 2, completed: false }
];

// ================== ELEMENTS ==================
const container = document.getElementById('course-container') || document.getElementById('course-cards');
const totalCreditsEl = document.getElementById('total-credits');
const filterButtons = document.querySelectorAll('.filters button');

// ================== FUNCTIONS ==================
function displayCourses(list) {
  container.innerHTML = '';
  
  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    if (course.completed) card.classList.add('completed');
    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
      <p>Status: ${course.completed ? 'Completed' : 'In Progress'}</p>
    `;
    container.appendChild(card);
  });

  // Actualizar total de créditos según cursos mostrados
  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  totalCreditsEl.textContent = `The total credits for courses listed above is ${totalCredits}.`;
}

// ================== FILTER EVENTS ==================
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    if (filter === 'all') {
      displayCourses(courses);
    } else {
      const filtered = courses.filter(c => c.code.toLowerCase().startsWith(filter.toLowerCase()));
      displayCourses(filtered);
    }
  });
});

// ================== INITIAL DISPLAY ==================
displayCourses(courses);

// ================== FOOTER DATES ==================
// Get the current year for the copyright
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Get the last modified date and time
const lastModified = new Date(document.lastModified);
const formattedDate = lastModified.toLocaleString();
document.getElementById('lastModified').textContent = `Last Modified: ${formattedDate}`;
