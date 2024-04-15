
export const pokemonIds = [1,5,2,7]



interface Pokemon {
    id: number;
    name: string;
    age?: number; //hace que sea opcional poner el valor age
}


export const bulbasaur:Pokemon = {
    id: 1,
    name: "bulbasaur",
}

export const charmander:Pokemon = {
    id:4,
    name: "charmander"
}


export const pokemons: Pokemon[] = [];

pokemons.push(charmander, bulbasaur)


console.log(pokemons);
