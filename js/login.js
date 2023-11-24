const form = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
    const email = emailInput.value;
    const password = passwordInput.value;
    const data = { email: email, password: password };
    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    }).then(r => alert('Successfully logged in. Your token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Illha3ViZXRzIE15a2hhaWxvIiwiaWF0IjoxNTE2MjM5MDIyfQ.qPfoYZ0RC9vwZ8cO-8aIoAY5YBn7sLwDi5DTV9976Rw'))
})