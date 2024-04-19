document.getElementById('inscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // Réinitialiser les messages d'erreur
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(msg => msg.textContent = '');

    let hasError = false;

    if (firstName.value.length < 2) {
        firstName.classList.add('is-invalid');
        firstName.nextElementSibling.textContent = 'Le prénom doit avoir au moins 2 caractères.';
        hasError = true;
    } else {
        firstName.classList.remove('is-invalid');
    }

    if (!validateEmail(email.value)) {
        email.classList.add('is-invalid');
        email.nextElementSibling.textContent = 'Veuillez entrer une adresse email valide.';
        hasError = true;
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.length < 8 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?\":{}|<>]).{8,}/.test(password.value)) {
        password.classList.add('is-invalid');
        password.nextElementSibling.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une lettre majuscule, une lettre minuscule, un chiffre et un caractère spécial.';
        hasError = true;
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        confirmPassword.nextElementSibling.textContent = 'Les mots de passe ne correspondent pas.';
        hasError = true;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    // Soumettez le formulaire si aucune erreur n'est rencontrée
    if (!hasError) {
        // Enregistrez les informations de l'utilisateur dans le stockage local pour simuler l'inscription
        localStorage.setItem('registeredUser', JSON.stringify({
            firstName: firstName.value,
            email: email.value,
            password: password.value
        }));
        // Affichez le formulaire de connexion
        document.getElementById('inscriptionForm').reset();
        showLoginForm();
    }
});

function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function showLoginForm() {
    document.getElementById('inscriptionForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
