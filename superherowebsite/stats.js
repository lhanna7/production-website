$main = document.querySelector("main")

function superOverview(hero) {
    const $div = document.createElement("div")
    $div.innerHTML = `
        <h2>${hero.name}</h2>
        <img src="${hero.images.md}">
        <ul class="bio">
            <li>Full Name: ${hero.biography.fullName}</li>
            <li>Alter Egos: ${hero.biography.alterEgos}</li>
            <li>Aliases: ${hero.biography.aliases}</li>
        </ul>
        <ul class="stat-stuff">
            <li>Intelligence: ${hero.powerstats.intelligence}</li>
            <li>Strength: ${hero.powerstats.strength}</li>
            <li>Speed: ${hero.powerstats.speed}</li>
            <li>Durability: ${hero.powerstats.durability}</li>
            <li>Power: ${hero.powerstats.power}</li>
            <li>Combat: ${hero.powerstats.combat}</li>
        </ul>
        <ul class="appearance">
            <li>Gender: ${hero.appearance.gender}</li>
            <li>Race: ${hero.appearance.race}</li>
            <li>Eye Color: ${hero.appearance.eyeColor}</li>
            <li>Hair Color: ${hero.appearance.hairColor}</li>
        </ul>
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
