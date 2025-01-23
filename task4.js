// Show the selected page and hide others
function showPage(pageId) {
    // Hide all sections
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.style.display = 'none';
    });
  
    // Show the selected page
    const selectedPage = document.getElementById(pageId);
    selectedPage.style.display = 'block';
  }
  
  // Example course data (to be rendered dynamically)
  const courses = [
    {
      title: "Web Development",
      description: "Learn the fundamentals of web development with hands-on projects.",
      image: "web developement.jpg",
    },
    {
      title: "Data Science",
      description: "Master the art of data analysis and visualization with Python.",
      image: "data science.jpg",
    },
    {
      title: "Machine Learning",
      description: "Get hands-on with machine learning algorithms and real-world applications.",
      image: "machine learning.jpg",
    },
  ];
  
  // Render courses dynamically
  function renderCourses() {
    const courseList = document.querySelector('.course-list');
    courses.forEach(course => {
      const courseCard = document.createElement('div');
      courseCard.classList.add('course-card');
      courseCard.innerHTML = `
        <img src="${course.image}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <button onclick="alert('Enrolled in ${course.title}')">Enroll Now</button>
      `;
      courseList.appendChild(courseCard);
    });
  }
  
  // Form Validation for Contact Page
  function validateContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name && email && message) {
      document.getElementById('form-feedback').textContent = "Your message has been sent!";
    } else {
      document.getElementById('form-feedback').textContent = "All fields are required!";
    }
  }
  
  // Form Validation for Login Page
  function validateLoginForm(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (username && password) {
      document.getElementById('login-feedback').textContent = "Login successful!";
    } else {
      document.getElementById('login-feedback').textContent = "Please enter both username and password!";
    }
  }
  
  // Initial render of the courses
  window.onload = () => {
    renderCourses();
    showPage('home'); // Default page on load
  };
  