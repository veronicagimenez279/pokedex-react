
import { useAbilities } from "../../../../hooks/useAbilities";
import { IPokemon } from "../../../../interfaces/interfaces"
import styles from "./styles.module.scss"

interface Props {
    pokemon: IPokemon | null;
    backgroundSelected: string;
}

export const Abilities = ({ pokemon, backgroundSelected }: Props) => {
    return (
        <div className={styles.Abilities}>
            {pokemon?.abilities?.map(({ ability }) => {
                const { ablt } = useAbilities(ability.url);
                return (
                    <div key={ability.name} className={styles.item}>
                        <span style={{ color: backgroundSelected }}>
                            {/* @ts-ignore  */}
                            {ability.name}
                        </span>

                        {ablt?.effect_entries.length == 0
                            ?
                            <div>No description available.</div>
                            :
                            <div className={styles.description}>
                                <p>
                                    {(ablt?.effect_entries[0]?.language?.name) === "en"
                                        ?
                                        ablt?.effect_entries[0]?.short_effect
                                        :
                                        ablt?.effect_entries[1]?.short_effect}</p>
                            </div>

                        }


                    </div>
                )
            })}
        </div>
    )
}
