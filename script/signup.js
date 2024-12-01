/* Login page */
/* Navigation bar control */
/* Navigation bar control */
const navBar = document.querySelector("div .sidebar"),
menuBtn1 = document.querySelector(".nav_bar .button"),
menuBtn2 = document.querySelector(".sidebar .sidebar_button"),
menuNavBar = document.querySelector("div .menu_sidebar"),
menuBtn3 = document.querySelector(".menu_sidebar .menusidebar_button"),
menuBtn4 = document.querySelector(".nav_bar .fa-cart-shopping");
plus = document.querySelector(".plus"),
num = document.querySelector(".num"),
minus = document.querySelector('.minus');


/* Checks for input to open the sidebar */
menuBtn1.addEventListener("click", () => {
        navBar.classList.toggle("active")
});

menuBtn2.addEventListener("click", () => {
        navBar.classList.toggle("active")
});

menuBtn3.addEventListener("click", () => {
        menuNavBar.classList.toggle("active")
});

menuBtn4.addEventListener("click", () => {
        menuNavBar.classList.toggle("active")
});

/* sign up form */
document.getElementById('SignupForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission
    
        // Get credential values
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;
        const confirmPassword = document.getElementById('Confirm-password').value;
        const errorMessage = document.getElementById('error-message');
    
        // Clear any previous error messages
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    
        // Basic validation
        if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
            errorMessage.textContent = 'All fields are required.';
            errorMessage.style.display = 'block';
            return;
        }
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
            errorMessage.textContent = 'Passwords do not match.';
            errorMessage.style.display = 'block';
            return;
        }
    
        // Validate email format using a regular expression
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            errorMessage.textContent = 'Please enter a valid email address.';
            errorMessage.style.display = 'block';
            return;
        }
    
        // If everything is valid, you can save the user (for example, in localStorage or send to the server)
        // For simplicity, we'll use localStorage here.
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Save new user
        const newUser = { email, password };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
    
        // Success message (you could redirect to a login page or dashboard)
        alert('Sign up successful! Please log in.');
        window.location.href = "login.html"
});

