// document.addEventListener("DOMContentLoaded", function () {
//     const emailInput = document.getElementById('email');
//     const passwordInput = document.getElementById('password');
//     const joinForm = document.querySelector('form');

//     // Function to validate email address
//     function validateEmail(email) {
//         const emailRegex = /\S+@\S+\.\S+/;
//         return emailRegex.test(email);
//     }

//     // Form submission handling
//     joinForm.addEventListener('submit', function (event) {
//         event.preventDefault(); // Prevent default form submission

//         // Perform form validation
//         const email = emailInput.value.trim();
//         const password = passwordInput.value.trim();

//         if (!validateEmail(email)) {
//             alert('Please enter a valid email address.');
//             return;
//         }

//         if (password.length < 6) {
//             alert('Password must be at least 6 characters long.');
//             return;
//         }

//         // If validation passes, you can proceed with form submission
//         console.log('Form submitted:', email, password);

//         // Clear input fields after form submission
//         joinForm.reset();
//     });

//     // Handling clicks on "Continue with Google" button
//     const continueWithGoogleBtn = document.querySelector('input[value="Continue with Google"]');
//     continueWithGoogleBtn.addEventListener('click', function () {
//         // Add your code to handle "Continue with Google" button click here
//         console.log('Continue with Google clicked');
//     });

//     // Handling clicks on links
//     const agreementLinks = document.querySelectorAll('p a');

//     agreementLinks.forEach(link => {
//         link.addEventListener('click', function (event) {
//             event.preventDefault();
//             // Add your code to handle agreement link clicks here
//             console.log('Agreement link clicked:', link.textContent);
//             // Example: Redirect to the clicked link
//             // window.location.href = link.href;
//         });
//     });

// });




document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const form = document.querySelector('form');
  
    // Validate email
    emailInput.addEventListener('input', (event) => {
      const email = emailInput.value.trim();
      if (validateEmail(email)) {
        addErrorMessage(emailInput, '');
      } else {
        addErrorMessage(emailInput, 'Invalid email. Please re-enter.');
      }
    });
  
    // Validate password
    passwordInput.addEventListener('input', (event) => {
      if (passwordInput.value.length >= 6) {
        addErrorMessage(passwordInput, '');
      } else {
        addErrorMessage(passwordInput, 'Password should be at least 6 characters.');
      }
    });
  
    // Form submission
    form.addEventListener('submit', (event) => {
      if (!validateEmail(emailInput.value.trim())) {
        addErrorMessage(emailInput, 'Please enter a valid email address.');
      }
      if (passwordInput.value.length < 6) {
        addErrorMessage(passwordInput, 'Password should be at least 6 characters.');
      }
      if (validateEmail(emailInput.value.trim()) && passwordInput.value.length >= 6) {
        console.log('Form submitted.');
      }
      event.preventDefault();
    });
  
    // Helper functions
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  
    function addErrorMessage(input, message) {
      if (input.nextElementSibling && input.nextElementSibling.classList.contains('input-error-message')) {
        return;
      }
      const error = document.createElement('div');
      error.classList.add('input-error-message');
      error.textContent = message;
      input.parentNode.insertBefore(error, input.nextSibling);
    }
  });