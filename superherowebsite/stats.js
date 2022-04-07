$main = document.querySelector("main")

function superOverview(hero) {
    const $div = document.createElement("div")
    $div.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.images.md}">
    `
    $main.append($div)
}


const queryString = new URLSearchParams(window.location.search)
fetch(`https://akabab.github.io/superhero-api/api/id/${queryString.get("id")}.json`)
    .then((response) => response.json())
    .then((parsedResponse) => {
        const newObject = parsedResponse
        superOverview(newObject)
        // console.log(superOverview(newObject))
    })
