const $main = document.querySelector("main")
const $div = document.querySelector("div")
const $h1 = document.querySelector("h1")

$h1.innerHTML = `
    <p>Hello, ${localStorage.getItem("first-name")} ${localStorage.getItem("last-name")}! Welcome to the dark side. Click on a villain to learn more about them.</p>
`

$div.innerHTML = `
    <a href="index.html" class="return-button">Changed Your Mind? Click Here To Reconsider Your Choice</a>
`

fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((response) => response.json())
    .then((listOfSupers) => {
        listOfSupers
            .filter(supervillain => {
                console.log(supervillain)
                return supervillain.biography.alignment === "bad"
            })
            .forEach(supervillain =>
                buildList(supervillain))
    }).catch(error => {
        console.error(error.message)
    })

function buildList(supervillain) {
    const $span = document.createElement("span")
    $span.innerHTML = `
        <a href="stats.html?id=${supervillain.id}">${supervillain.name}</a>
    `
    $main.append($span)
}


