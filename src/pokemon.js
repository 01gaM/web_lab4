async function getAbilityInfo(abilityUrl) {
    let response = await fetch(abilityUrl);

    if (!response.ok) {
        console.log('ERROR: Request returned error');
        return null;
    }

    const EFFECT_DATA = await response.json();
    return EFFECT_DATA.effect_entries[0].effect;
}

export default async function getPokemonInfo(pokemonName) {
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)

    if (!response.ok) {
        console.log('ERROR: Request returned error');
        return null;
    }

	const POKEMON_DATA = await response.json();
	
	let pokeID = POKEMON_DATA.id
	let pokeInfo = `<div><div><img src = "https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png" alt = "Pokemon image"/></div>`
	
    pokeInfo += `<div><span><span style="font-weight: bold">Name: </span>${pokemonName}<br></span>`;

    
    for (let i = 0; i < POKEMON_DATA.abilities.length; i++) {
        let ability = POKEMON_DATA.abilities[i].ability;
        let abilityUrl = ability.url;
        let abilityPromise = getAbilityInfo(abilityUrl);
        let abilityName = ability.name;
       

        pokeInfo += `<span><span style="font-weight: bold">${abilityName}: </span>${await abilityPromise}<br></span>`
    }
	pokeInfo += `</div></div>`
    return pokeInfo;
}