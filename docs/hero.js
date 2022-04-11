const $main = document.querySelector("main")
const $div = document.querySelector("div")
const $h1 = document.querySelector("h1")

$h1.innerHTML = `
    <p>Hello, ${localStorage.getItem("first-name")} ${localStorage.getItem("last-name")}! You have passed the morality check. Click on a hero to learn more about them.</p>
`

$div.innerHTML = `
    <a href="index.html" class="return-button">Changed Your Mind? Click Here To Reconsider Your Choice</a>
`

fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((response) => response.json())
    .then((listOfSupers) => {
        listOfSupers
            .filter(superhero => {
                console.log(superhero)
                return superhero.biography.alignment === "good"
            })
            .forEach(superhero =>
                buildList(superhero))
    }).catch(error => {
        console.error(error.message)
    })

function buildList(superhero) {
    const $span = document.createElement("span")
    $span.innerHTML = `
        <a href="stats.html?id=${superhero.id}">${superhero.name}</a>
    `
    $main.append($span)
}

