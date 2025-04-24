function checkPassword() {
    const password = document.getElementById('password-input').value;
    if (password === 'hera-seyer') {
        document.getElementById('password-prompt').style.display = 'none';
        document.getElementById('secure-main').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}