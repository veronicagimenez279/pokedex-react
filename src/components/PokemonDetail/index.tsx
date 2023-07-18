
import { background } from "../../utils/BackgroundsByType";
import { IPokemon } from "../../interfaces/interfaces";
import styles from "./styles.module.scss"
import { Loader } from "../Loader";
import { Header } from "./components/Header";
import { PokeTypes } from "./components/PokeType";
import { Title } from "./components/Title";
import { Stats } from "./components/Stats";
import { BaseStats } from "./components/BaseStats";
import { Abilities } from "./components/Abilities";
import LogoPokemon from "../../assets/LogoPokemon.png"


interface Props {
    pokemon: IPokemon | null;
}

export const PokemonDetail = ({ pokemon }: Props) => {

    /* @ts-ignore */
    const backgroundSelected = background[pokemon?.types[0]?.type?.name];

    if (!pokemon) {
        return (
            <div
                style={{ background: backgroundSelected }}
                className={styles.loadingContainer}
            >
                <Loader size={50} color="fff" />
            </div>
        );
    }


    return (
        <div style={{ background: backgroundSelected }} className={styles.bg}>
            <Header pokemon={pokemon} />
            <div className={styles.info} >
                {pokemon?.sprites?.other?.dream_world?.front_default || pokemon?.sprites?.front_default ?
                    <img
                        src={
                            pokemon?.sprites?.other?.dream_world?.front_default ||
                            pokemon?.sprites?.front_default
                        }
                        alt={pokemon?.name}
                    /> : <img src={LogoPokemon} alt="LogoPokemon" />}
                <PokeTypes pokemon={pokemon} />
                <Title content="About" backgroundSelected={backgroundSelected} />
                <Stats pokemon={pokemon} />
                <Title content="Abilities" backgroundSelected={backgroundSelected} />
                <Abilities pokemon={pokemon} backgroundSelected={backgroundSelected} />
                <Title content="Base Stats" backgroundSelected={backgroundSelected} />
                <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />

            </div>
        </div>
    );

}