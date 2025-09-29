function loginUser() {
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value.trim();
  const users = JSON.parse(localStorage.getItem('users')) || [];

  const user = users.find(u => u.phone === phone && u.password === password);
  if (!user) {
    alert("Invalid phone or password.");
    return;
  }

  const today = new Date().toISOString().split('T')[0];
  if (today > user.expiry) {
    localStorage.setItem('expiredUser', JSON.stringify(user));
    window.location.href = 'payment.html';
  } else {
    localStorage.setItem('loggedInUser', JSON.stringify(user));

    // Save login history
    user.loginHistory = user.loginHistory || [];
    user.loginHistory.push(new Date().toISOString());
    localStorage.setItem('users', JSON.stringify(users));

    // Check if admin
    if (user.phone === "01955255066") {
      window.location.href = 'admin.html';
    } else {
      window.location.href = 'dashboard.html';
    }
  }
}