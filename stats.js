$main = document.querySelector("main")

function superOverview(hero) {
    const $div = document.createElement("div")
    let bio = {
        name: hero.biography.fullName,
        ego: hero.biography.alterEgos,
        alias: hero.biography.aliases,
        publisher: hero.biography.publisher
    }
    let stats = {
        intelligence: hero.powerstats.intelligence,
        strength: hero.powerstats.strength,
        speed: hero.powerstats.speed,
        durability: hero.powerstats.durability,
        power: hero.powerstats.power,
        combat: hero.powerstats.combat
    }
    let looks = {
        gender: hero.appearance.gender,
        race: hero.appearance.race,
        eyeColor: hero.appearance.eyeColor,
        hairColor: hero.appearance.hairColor
    }
    $div.innerHTML = `
        <a href="index.html" class="return-button">Return Home</a>
        <h2>${hero.name}</h2>
        <img src="${hero.images.md}">
        <ul class="bio">
            <li>Full Name: ${bio.name}</li>
            <li>Alter Egos: ${bio.ego}</li>
            <li>Aliases: ${bio.alias}</li>
            <li>Universe: ${bio.publisher}</li>
        </ul>
        <ul class="stat-stuff">
            <li>Intelligence: ${stats.intelligence}</li>
            <li>Strength: ${stats.strength}</li>
            <li>Speed: ${stats.speed}</li>
            <li>Durability: ${stats.durability}</li>
            <li>Power: ${stats.power}</li>
            <li>Combat: ${stats.combat}</li>
        </ul>
        <ul class="appearance">
            <li>Gender: ${looks.gender}</li>
            <li>Race: ${looks.race}</li>
            <li>Eye Color: ${looks.eyeColor}</li>
            <li>Hair Color: ${looks.hairColor}</li>
        </ul>
    `
    $main.append($div)
}


const queryString = new URLSearchParams(window.location.search)
fetch(`https://akabab.github.io/superhero-api/api/id/${queryString.get("id")}.json`)
    .then((response) => response.json())
    .then((parsedResponse) => {
        const superStats = parsedResponse
        superOverview(superStats)
    })
