const $hero = document.querySelector(".hero-left")
const $villain = document.querySelector(".villain-right")
const $main = document.querySelector("main")

$hero.innerHTML = `
    <a href="hero.html" class="heroTitle">HERO</a>
`

$villain.innerHTML = `
    <a href="villain.html" class="villainTitle">VILLAIN</a>
`

const $submit = document.querySelector("#clicky")
const $form = document.querySelector("form")

$form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get("first-name")
    const lastName = formData.get("last-name")
    $submit.value = "Done!"

    localStorage.setItem("first-name", firstName)
    localStorage.setItem("last-name", lastName)
    console.log(localStorage.getItem("first-name"), localStorage.getItem("last-name"))
})

