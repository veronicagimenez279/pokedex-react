import { PokeballIconBig } from '../../assets/pokeball';
import { usePokemon } from '../../hooks/usePokemon'
import { background } from '../../utils/BackgroundsByType';
import { Loader } from '../Loader';
import styles from './styles.module.scss'
import { Link } from "react-router-dom";

interface Props {
    url: string;
}

export const PokemonCard = ({ url }: Props) => {
    const { pokemon } = usePokemon(url);

    /* @ts-ignore */
    const backgroundSelected = background[pokemon?.types[0]?.type?.name];

    return (
        <Link to={`/${pokemon?.id}`} className={styles.pokeCard} style={{ backgroundColor: backgroundSelected }}>
            <div style={{ borderColor: backgroundSelected }} className={styles.top}>
                <PokeballIconBig className={styles.pokeball} />

                <div className={styles.top}>
                    <span style={{ color: "white", opacity: "30%" }}> {'#'}{pokemon?.id}</span>
                    <div style={{ color: 'white' }} className={styles.name} >
                        {pokemon?.name || "#"}

                    </div>
                </div>

                {pokemon?.sprites?.other?.dream_world?.front_default ||
                    pokemon?.sprites?.front_default ? (
                    <img
                        src={
                            pokemon?.sprites?.other?.dream_world?.front_default ||
                            pokemon?.sprites?.front_default
                        }
                        alt={pokemon?.name}
                    />
                ) : (
                    <div className={styles.loadingContainer}>
                        <Loader color={backgroundSelected} />
                    </div>
                )}

            </div>

        </Link>
    );
}
