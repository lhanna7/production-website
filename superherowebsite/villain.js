const $main = document.querySelector("main")
const $div = document.querySelector("div")


$div.innerHTML = `
    <a href="index.html">Changed Your Mind? Click Here To Reconsider Your Choice</a>
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
    })


function buildList(supervillain) {
    const $span = document.createElement("span")
    $span.innerHTML = `
        <a href="stats.html?id=${supervillain.id}">${supervillain.name}</a>
    `
    $main.append($span)
}


