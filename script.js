document.addEventListener('DOMContentLoaded', function() {
    var loginForm = document.getElementById('loginForm');
    var signupForm = document.getElementById('signupForm');

    // Function to validate login form
    function validateLoginForm() {
        var loginUsername = document.getElementById('loginUsername').value;
        var loginPassword = document.getElementById('loginPassword').value;

        if (loginUsername === "") {
            alert("Username cannot be empty");
            return false;
        }
        if (loginPassword === "") {
            alert("Password cannot be empty");
            return false;
        }

        return true;
    }

    // Function to validate signup form
    function validateSignupForm() {
        var username = document.getElementById('username').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var dob = document.getElementById('dob').value;
        var password = document.getElementById('password').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        if (username === "") {
            alert("Username cannot be empty");
            return false;
        }
        if (email === "") {
            alert("Email cannot be empty");
            return false;
        }
        if (phone === "") {
            alert("Phone number cannot be empty");
            return false;
        }
        if (dob === "") {
            alert("Date of birth cannot be empty");
            return false;
        }
        if (password === "") {
            alert("Password cannot be empty");
            return false;
        }
        if (confirmPassword === "") {
            alert("Please confirm your password");
            return false;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }

        return true;
    }

    // Add event listener for login form submission
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            if (validateLoginForm()) {
                alert("Login form submitted successfully");
                // Perform actual form submission or other actions here
                loginForm.reset();
            }
        });
    }

    // Add event listener for signup form submission
    if (signupForm) {
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            if (validateSignupForm()) {
                alert("Signup form submitted successfully");
                // Perform actual form submission or other actions here
                signupForm.reset();
            }
        });
    }
});
