document.addEventListener("DOMContentLoaded", function() {
    const book = document.querySelector(".floating-book");
    if (book) {
        book.addEventListener("click", function(e) {
            e.preventDefault();
            alert("นี่คือเบาะแสจากหนังสือสายลับไซเบอร์!");
            window.location.href = book.getAttribute("href");
        });
    }
});