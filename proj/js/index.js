document.getElementById("book_place_right_now").addEventListener("click", () => document.getElementById("form").style.display = "block")

const form = document.getElementById("form")

form.addEventListener("submit", (ev) => {
    ev.preventDefault()
    localStorage.setItem('username', form.elements["username"].value);
})