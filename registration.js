// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Function to validate password
function validatePassword(password) {
    // Password length should be at least 6 characters
    return password.length >= 6;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // Get input values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if email and password are correct
    const isEmailCorrect = email === 'admin@example.com';
    const isPasswordCorrect = password === 'admin1';

    // Validate email and password
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (!validatePassword(password)) {
        alert('Password should be at least 6 characters long.');
        passwordInput.focus();
        return;
    }

    // If email and password are correct, redirect to another webpage
    if (isEmailCorrect && isPasswordCorrect) {
        // Redirect to a webpage
        window.location.href = 'mainpage1.html'; 
        return;
    }

    // If validation passes but email or password is incorrect, show an alert
    alert('Invalid email or password. Please try again.');
}

// Add event listener for form submission
document.getElementById('registrationForm').addEventListener('submit', handleFormSubmission);
