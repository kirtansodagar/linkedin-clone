document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('sign-in-form');
    const continueGoogleButton = document.getElementById('continue-google');

    signInForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Your validation logic here
        if (email.trim() === '' || password.trim() === '') {
            alert('Please fill in all fields');
            return;
        }

        // If validation passes, you can submit the form or handle it in any way you want
        // Here, I'm logging the form data
        console.log('Email:', email);
        console.log('Password:', password);
        // Example: signInForm.submit(); // Submit the form
    });

    continueGoogleButton.addEventListener('click', function() {
        // Handle the "Continue with Google" button click here
        // console.log('Continue with Google clicked');

        alert("YOu are going to Continue with Your Account");
        // You can implement your Google sign-in logic here
    });
});
