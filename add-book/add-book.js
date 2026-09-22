
const backButton = document.getElementById("back-button");
const form = document.getElementById("book-form");
const message = document.getElementById("message");

backButton.addEventListener("click", () => {

    window.location.href = "../index.html";

});

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    const book = {
        title: document.getElementById("title").value,
        author: document.getElementById("author").value,
        status: document.getElementById("status").value
    };

    try {
        const savedBook = await window.electronAPI.addBook(book);

        console.log("Book saved:", savedBook);

        message.textContent = "Book saved successfully!";

    } catch (error) {

        message.textContent = "Could not save the book.";

    }

});
