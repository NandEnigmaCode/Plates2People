document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signup');
    const emailInput = form.querySelector('input[type="email"]');
    const passwordInput = form.querySelector('input[type="password"]');
    const submitButton = form.querySelector('#submit');

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }

    function validatePassword(password) {
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        return passwordPattern.test(password);
    }

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const email = emailInput.value;
        const password = passwordInput.value;

        if (!validateEmail(email)) {
            alert('Invalid email address.');
            return;
        }

        if (!validatePassword(password)) {
            alert('Password must be at least 8 characters long and contain lowercase, uppercase, special characters, and numbers.');
            return;
        }

        alert('True');
    });
});
