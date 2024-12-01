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


/* Quantity bar */ 
let a = 1;

plus.addEventListener('click', () => {
        if ( a < 10) {
                a++;
        }
        num.innerText = a;
});

minus.addEventListener('click', () => {
        if ( a > 1 ) {
                a--;
        }
        num.innerText = a;
});