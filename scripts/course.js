// ================== COURSE DATA ==================
const courses = [
  { code: 'WDD130', name: 'Web Fundamentals', credits: 2, completed: true },
  { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 2, completed: true },
  { code: 'CSE110', name: 'Intro to Programming', credits: 2, completed: false },
  { code: 'CSE111', name: 'Programming with Functions', credits: 2, completed: false },
  { code: 'WDD231', name: 'Frontend Development I', credits: 2, completed: false }
];

// ================== DOM ELEMENTS ==================
const container = document.getElementById('course-container');
const totalCreditsEl = document.getElementById('total-credits');

const filterButtons = {
  all: document.getElementById('all'),
  wdd: document.getElementById('wdd'),
  cse: document.getElementById('cse')
};

// ================== DISPLAY COURSES ==================
function displayCourses(list) {
  // Limpiar contenedor
  container.innerHTML = '';

  // Crear tarjetas de curso
  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
      <h3>${course.code}</h3>
      <p>${course.name}</p>
      <p>Credits: ${course.credits}</p>
    `;

    container.appendChild(card);
  });

  // Calcular créditos totales del listado actual
  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  totalCreditsEl.textContent = totalCredits;
}

// ================== FILTER HANDLERS ==================
filterButtons.all.addEventListener('click', () => displayCourses(courses));
filterButtons.wdd.addEventListener('click', () => {
  const filtered = courses.filter(c => c.code.startsWith('WDD'));
  displayCourses(filtered);
});
filterButtons.cse.addEventListener('click', () => {
  const filtered = courses.filter(c => c.code.startsWith('CSE'));
  displayCourses(filtered);
});

// ================== INITIAL DISPLAY ==================
displayCourses(courses);

// ================== COPYRIGHT & LAST MODIFIED ==================
document.getElementById('currentyear').textContent = new Date().getFullYear();

const lastModified = new Date(document.lastModified);
document.getElementById('lastModified').textContent = `Last Modified: ${lastModified.toLocaleString()}`;
