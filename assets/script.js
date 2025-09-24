// Static user list
const users = [
  { phone: '01955255066', name: 'Milon Hossain', password: '12345' },
  { phone: '01400115520', name: 'Mohin-মহিন, password: '12345' }
];

// Login logic
if (document.getElementById('loginForm')) {
  document.getElementById('loginForm').addEventListener('submit', e => {
    e.preventDefault();
    const phone = e.target.phone.value.trim();
    const pass = e.target.password.value;
    if (!e.target.agree.checked) {
      return alert('You must agree to the terms.');
    }
    const user = users.find(u => u.phone === phone && u.password === pass);
    if (!user) {
      return alert('Invalid credentials.');
    }
    localStorage.setItem('loggedUser', JSON.stringify(user));
    location.href = 'dashboard.html';
  });
}

// Dashboard logic
if (document.getElementById('logoutBtn')) {
  const user = JSON.parse(localStorage.getItem('loggedUser'));
  if (!user) return location.href = 'index.html';
  document.getElementById('userNameDisplay').textContent = user.name;
  document.getElementById('logoutBtn').addEventListener('click', () => {
    localStorage.removeItem('loggedUser');
    location.href = 'index.html';
  });
  document.querySelectorAll('[data-link]').forEach(item => {
    item.addEventListener('click', () => {
      document.getElementById('contentFrame').src = item.dataset.link;
    });
  });
