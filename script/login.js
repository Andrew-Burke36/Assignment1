/* Login page */
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


document.getElementById('LoginForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent form submission
    
        // Get input values
        const email = document.getElementById('Email').value;
        const password = document.getElementById('Password').value;
        const errorMessage = document.getElementById('error-message');
    
        // Clear any previous error messages
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
    
        // Basic validation
        if (email.trim() === '' || password.trim() === '') {
            errorMessage.textContent = 'Both fields are required.';
            errorMessage.style.display = 'block';
            return;
        }
    
        // Retrieve stored users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
    
        // Check if the user exists and if the password matches
        const user = users.find(u => u.email === email && u.password === password);
    
        if (user) {
            // If the user is found, log in successfully
            alert('Login successful!');
            // Redirect to the dashboard or home page
            window.location.href = 'dashboard.html';  // Replace with your desired page
        } else {
            // If the user is not found or credentials are incorrect
            errorMessage.textContent = 'Invalid email or password.';
            errorMessage.style.display = 'block';
        }
    });