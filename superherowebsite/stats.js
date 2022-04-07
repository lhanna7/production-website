$main = document.querySelector("main")

function superOverview(oneSuper) {
    const $div = document.createElement("div")
    $div.innerHTML = `
        <h2>${oneSuper.name}</h2>
    `
    $main.append($div)
}


const queryString = new URLSearchParams(window.location.search)
fetch(`https://akabab.github.io/superhero-api/api/all.json/${queryString.get("oneSuper")}`)
    .then((response) => response.json())
    .then((parsedResponse) => {
        const newObject = parsedResponse
        console.log(newObject)
    })
superOverview()