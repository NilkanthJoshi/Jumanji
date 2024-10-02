document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    const signupMessage = document.getElementById('signup-message');
    const signinForm = document.getElementById('signin-form');
    const signinMessage = document.getElementById('signin-message');

    signupForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        // Email validation
        if (!emailPattern.test(email)) {
            signupMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Password length validation
        if (password.length < 6) {
            signupMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        // Confirm password validation
        if (password !== confirmPassword) {
            signupMessage.textContent = 'Passwords do not match.';
            return;
        }

        // Success message
        signupMessage.textContent = 'Sign up successful! Click Sign In to log in.';
        signupForm.reset();
    });

    signinForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const signinEmail = document.getElementById('signin-email').value;
        const signinPassword = document.getElementById('signin-password').value;

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Email validation
        if (!emailPattern.test(signinEmail)) {
            signinMessage.textContent = 'Please enter a valid email address.';
            return;
        }

        // Password length validation
        if (signinPassword.length < 6) {
            signinMessage.textContent = 'Password must be at least 6 characters long.';
            return;
        }

        // Redirect to index2.html on successful sign-in
        signinMessage.textContent = 'Sign in successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'index2.html'; // Redirect after a short delay
        }, 1000); // 1-second delay before redirect
    });

    // Show Sign In form and hide Sign Up form
    document.getElementById('show-signin').addEventListener('click', (e) => {
        e.preventDefault();
        signupForm.style.display = 'none';
        signinForm.style.display = 'block';
    });

    // Show Sign Up form and hide Sign In form
    document.getElementById('show-signup').addEventListener('click', (e) => {
        e.preventDefault();
        signinForm.style.display = 'none';
        signupForm.style.display = 'block';
    });
});
