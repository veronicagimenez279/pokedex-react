export type PokeTypes =
    | "normal"
    | "fighting"
    | "flying"
    | "ground"
    | "poison"
    | "rock"
    | "bug"
    | "ghost"
    | "steel"
    | "fire"
    | "water"
    | "grass"
    | "electric"
    | "psychic"
    | "ice"
    | "dragon"
    | "dark"
    | "fairy"
    | "unknown"
    | "shadow";

export const background: { [key in PokeTypes]: string } = {
    normal: "#C4BF93",
    fighting: "#D4295C",
    flying: "#A891EC",
    ground: "#DEC16B",
    poison: "#CF8EE0",
    rock: "#B69E31",
    bug: "#8FC74F",
    ghost: "#7B62A3",
    steel: "#9EB7B8",
    fire: "#FB6C6C",
    water: "#77BEFE",
    grass: "#46D1B2",
    electric: "#F0C72E",
    psychic: "#FF6EA0",
    ice: "#9AD6DF",
    dragon: "#6e3af0",
    dark: "#75574C",
    fairy: "#F5A8B7",
    unknown: "#526677",
    shadow: "#2E2E47",
};