const users = [
  { username: 'admin', password: '12345' },
  { username: 'milon', password: '12345' }
];

const loginSection = document.getElementById('loginSection');
const appSection = document.getElementById('appSection');
const loginBtn = document.getElementById('loginBtn');
const logoutBtn = document.getElementById('logoutBtn');

loginBtn.addEventListener('click', () => {
  const uname = document.getElementById('username').value;
  const pass = document.getElementById('password').value;
  const msg = document.getElementById('loginMsg');
  const user = users.find(u => u.username === uname && u.password === pass);
  if(user){
    loginSection.classList.add('hidden');
    appSection.classList.remove('hidden');
  } else {
    msg.textContent = "Invalid credentials";
  }
});

logoutBtn.addEventListener('click', () => {
  appSection.classList.add('hidden');
  loginSection.classList.remove('hidden');
});
