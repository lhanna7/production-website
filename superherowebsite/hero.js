const $main = document.querySelector("main")
const $div = document.querySelector("div")

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
    })


function buildList(superhero) {
    const $span = document.createElement("span")
    $span.innerHTML = `
        <a href="stats.html?id=${superhero.id}">${superhero.name}</a>
    `
    $main.append($span)
}

