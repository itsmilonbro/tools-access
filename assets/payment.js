const expiredUser = JSON.parse(localStorage.getItem('expiredUser'));
if (!expiredUser) {
  window.location.href = 'index.html';
}

document.body.insertAdjacentHTML('afterbegin', `
  <div class="text-center mt-6">
    <p><strong>Name:</strong> ${expiredUser.name}</p>
    <p><strong>Phone:</strong> ${expiredUser.phone}</p>
    <p><strong>Expired On:</strong> ${expiredUser.expiry}</p>
  </div>
`);