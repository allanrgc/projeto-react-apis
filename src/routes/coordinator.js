

    export const homeButton = (navigate) => {
        navigate("/")
    }
    
    export const pokedexButton = (navigate) => {
        navigate(`/pokedex`)
    }

    export const detailsButton = (navigate, pokemonName) => {
        navigate(`/details/${pokemonName}`)
    }