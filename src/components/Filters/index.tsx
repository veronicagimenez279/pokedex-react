import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { usePagination } from '../../hooks/usePagination';
import { PokemonContext } from '../../context/PokemonContext';
import { PokeType } from '../../interfaces/types';

import styles from "./style.module.scss"
import { background } from '../../utils/BackgroundsByType';
import { MdCatchingPokemon } from 'react-icons/md';

export const Filters = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { types, filterSelected, changeTypeSelected } = useContext(PokemonContext);
    const { changePage } = usePagination();

    const onChangeType = (type: PokeType) => {
        changePage(1);
        navigate("/?page=1");
        changeTypeSelected(type)

    };


    return (

        <div className={styles.ordersContainer} onClick={() => setOpen(!open)} >
            <div className={styles.container}>
                <div className={open ? styles.orderClose : styles.orderOpen}>
                    <span>{filterSelected?.name} </span>
                    <FiltersIcon />
                </div>
                {open && types && (
                    <div className={styles.orders}>
                        {types.map((type: PokeType) => (
                            <div
                                key={type.name}
                                className={styles.order}
                                onClick={() => onChangeType(type)}
                                style={{
                                    fontWeight: filterSelected.name === type.name ? "bold" : "",
                                }}
                            >
                                <div className={styles.color}>
                                    <MdCatchingPokemon
                                        /* @ts-ignore */
                                        fill={background[type.name]}
                                        style={{
                                            border: "2px solid",
                                            borderRadius: "50px",
                                            /* @ts-ignore */
                                            borderColor: background[type.name]
                                        }}
                                    />
                                </div>
                                {type.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

const FiltersIcon = ({ ...props }) => {
    return (
        <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
                d="M19.5 9L12 16.5L4.5 9"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};