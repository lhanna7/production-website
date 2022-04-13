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
    $submit.style.color = "rgb(35, 255, 134)"
    $submit.style.border = "solid 1px rgb(35, 255, 134)"

    localStorage.setItem("first-name", firstName)
    localStorage.setItem("last-name", lastName)

    const bottomHalf = document.querySelectorAll(".hidden")
    bottomHalf.forEach(element => {
        element.classList.remove("hidden")
    })

    const h1 = document.querySelector(".Title")
    h1.textContent = `${localStorage.getItem("first-name")},Choose Your Affilliation`
})
