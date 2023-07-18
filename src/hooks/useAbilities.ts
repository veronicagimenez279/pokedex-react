import { useState, useEffect } from "react"
import { AbilitiesPokedex, EffectEntry, } from "../interfaces/interfaces"
import axios from "axios"

export const useAbilities = (url: string) => {
    const [ablt, setAbility] = useState<null | undefined | AbilitiesPokedex>();

    const fetchAbility = async () => {
        if (url) {
            const { data }: any = await axios.get(url);
            setAbility(data)
        }
    };

    useEffect(() => {
        fetchAbility();

    }, []);

    return { ablt }
}