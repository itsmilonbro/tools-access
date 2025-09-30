const userTable = document.getElementById('userTable');
const users = JSON.parse(localStorage.getItem('users')) || [];

function renderUsers() {
  userTable.innerHTML = '';
  users.forEach((user, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.phone}</td>
      <td>${user.expiry}</td>
      <td>
        <button onclick="deleteUser(${index})" class="btn btn-danger btn-sm">Delete</button>
      </td>
    `;
    userTable.appendChild(row);
  });
}

function addUser() {
  const name = document.getElementById('newName').value.trim();
  const phone = document.getElementById('newPhone').value.trim();
  const password = document.getElementById('newPassword').value.trim();
  const expiry = document.getElementById('newExpiry').value;

  if (!name || !phone || !password || !expiry) {
    alert("Please fill in all fields.");
    return;
  }

  const newUser = { name, phone, password, expiry, loginHistory: [] };
  users.push(newUser);
  localStorage.setItem('users', JSON.stringify(users));
  renderUsers();

  // Clear form
  document.getElementById('newName').value = '';
  document.getElementById('newPhone').value = '';
  document.getElementById('newPassword').value = '';
  document.getElementById('newExpiry').value = '';
}

function deleteUser(index) {
  if (confirm("Are you sure you want to delete this user?")) {
    users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(users));
    renderUsers();
  }
}
renderUsers();
