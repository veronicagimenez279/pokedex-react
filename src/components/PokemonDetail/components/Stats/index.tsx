import { IPokemon } from "../../../../interfaces/interfaces";
import styles from "./styles.module.scss"
import { IoScaleOutline } from "react-icons/io5";
import { PiRuler } from "react-icons/pi";


interface Props {
    pokemon: IPokemon | null;
}


export const Stats = ({ pokemon }: Props) => {

    return (
        <div className={styles.stats}>
            <div className={styles.item}>
                <IoScaleOutline />
                {/* @ts-ignore */}
                <span>{pokemon?.weight / 10} kg</span>
                <p>Weight</p>
            </div>

            <div className={styles.item}>
                <PiRuler />
                {/* @ts-ignore */}
                <span>{(pokemon?.height) / 10} m</span>
                <p>Height</p>
            </div>
        </div>
    );
};