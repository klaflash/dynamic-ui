
const form = document.getElementById('form');

const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('pass');
const match = document.getElementById('pass-match');

form.addEventListener('submit', event => {

    event.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const parent = element.parentElement;
    const error = parent.querySelector('.error');

    error.textContent = message;
    
    parent.classList.add('error');
    parent.classList.remove('success');
}

const setSuccess = (element) => {
    const parent = element.parentElement;
    const error = parent.querySelector('.error');

    error.textContent = '';
    parent.classList.add('success');
    parent.classList.remove('error');
};

const validateInputs = () => {

    if (email.value === '') {
        setError(email, 'Email is required');
    } else {
        setSuccess(email);
    }

    if (country.value === '') {
        setError(country, 'Country is required');
    } else {
        setSuccess(country);
    }

    if (zip.value === '') {
        setError(zip, 'Zip Code is required');
    } else {
        setSuccess(zip);
    }

    if (password.value === '') {
        setError(password, 'Password is required');
    } else if (password.value.length < 8) {
        setError(password, 'Password must be at least 8 characters');
    } else {
        setSuccess(password);
    }

    if (match.value === '') {
        setError(match, "Confirm password");
    } else if (password.value !== match.value) {
        setError(match, 'Passwords do not match');
    } else {
        setSuccess(match);
    }

};