const $main = document.querySelector("main")

$main.innerHTML = `
    <a href="index.html">Changed Your Mind? Click Here To Reconsider Your Choice</a>
`

fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((response) => response.json())
    .then((parsedResponse) => {
        parsedResponse
            // .filter(allSupers => allSupers.alignment === "good")
            .forEach(response =>
                buildList(response))
    })


function buildList(allSupers) {
    const $span = document.createElement("span")
    $span.innerHTML = `
        <a href="stats.html?id=${allSupers.id}">${allSupers.name}</a>
    `
    $main.append($span)
}

