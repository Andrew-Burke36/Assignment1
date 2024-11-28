const navBar = document.querySelector("div .sidebar"),
menuBtn1 = document.querySelector(".nav_bar .button"),
menuBtn2 = document.querySelector(".sidebar .sidebar_button"),
overlay = document.querySelector(".overlay");

menuBtn1.addEventListener("click", () => {
        navBar.classList.toggle("active")
});

menuBtn2.addEventListener("click", () => {
        navBar.classList.toggle("active")
});

overlay.addEventListener("click", () => {
        navBar.classList.removes("active")
});