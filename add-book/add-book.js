
console.log("add-book.js loaded!");

const backButton = document.getElementById("back-button");

backButton.addEventListener("click", () => {

    window.location.href = "../index.html";

});

const form = document.getElementById("book-form");

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        status: document.getElementById("status").value
    };

    const savedBook = await window.electronAPI.addBook(book);

    console.log("Book saved:", savedBook);

});

