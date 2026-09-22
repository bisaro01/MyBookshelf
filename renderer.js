const homePage = document.getElementById("home-page");
const addBookPage = document.getElementById("add-book-page");

const addBookButton = document.getElementById("add-book-button");
const backButton = document.getElementById("back-button");

addBookButton.addEventListener("click", () => {
    homePage.style.display = "none";
    addBookPage.style.display = "block";
    });

backButton.addEventListener("click", () => {
    addBookPage.style.display = "none";
    homePage.style.display = "block";
    });