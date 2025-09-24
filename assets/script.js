// Simple login simulation (replace with real authentication in production)
document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      // Simulated check - in production use secure backend
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      if (username === '01955255066' && password === '12345') {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'dashboard.html';
      } else {
        alert('Invalid username or password!');
      }
    });
  }

  // Protect dashboard page
  if (window.location.pathname.endsWith('dashboard.html')) {
    if (localStorage.getItem('loggedIn') !== 'true') {
      window.location.href = 'index.html';
    }
  }
});

// Sidebar navigation for dashboard
function loadTool(toolFile, element) {
  const frame = document.getElementById('toolFrame');
  if (frame) {
    frame.src = 'tools/' + toolFile;
    // Update active class
    const navItems = document.querySelectorAll('.sidebar nav li');
    navItems.forEach(li => li.classList.remove('active'));
    if (element) element.classList.add('active');
  }
}

// Logout function
function logout() {
  localStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}
