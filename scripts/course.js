// ================== COURSE DATA ==================
const courses = [
  { code: 'WDD130', name: 'Web Fundamentals', credits: 2, completed: true },
  { code: 'WDD131', name: 'Dynamic Web Fundamentals', credits: 2, completed: true },
  { code: 'CSE110', name: 'Intro to Programming', credits: 2, completed: false },
  { code: 'CSE111', name: 'Programming with Functions', credits: 2, completed: false },
  { code: 'WDD231', name: 'Frontend Development I', credits: 2, completed: false }
];

const container = document.getElementById('course-container');
const totalCreditsEl = document.getElementById('total-credits');

function displayCourses(list) {
  container.innerHTML = '';

  list.forEach(course => {
    const card = document.createElement('div');
    card.className = 'course-card';

    if (course.completed) {
      card.classList.add('completed');
      card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
        <p class="status">✔ Completed</p>
      `;
    } else {
      card.innerHTML = `
        <h3>${course.code}</h3>
        <p>${course.name}</p>
        <p>Credits: ${course.credits}</p>
      `;
    }

    container.appendChild(card);
  });

  const totalCredits = list.reduce((sum, c) => sum + c.credits, 0);
  totalCreditsEl.textContent = totalCredits;
}

// ================== FILTERS ==================
document.getElementById('all').addEventListener('click', () => displayCourses(courses));
document.getElementById('wdd').addEventListener('click', () =>
  displayCourses(courses.filter(c => c.code.startsWith('WDD')))
);
document.getElementById('cse').addEventListener('click', () =>
  displayCourses(courses.filter(c => c.code.startsWith('CSE')))
);

// Initial display
displayCourses(courses);
