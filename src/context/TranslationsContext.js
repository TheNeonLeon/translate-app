import { createContext, useContext, useState } from "react";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

const TranslationsContext = createContext();


export const useTranslations = () => {
    return useContext(TranslationsContext);
}

const TranslationsProvider = ({children}) => {
    const user = readTheStorage(STORAGE_KEY_USER);
    const [translations, setTranslations] = useState({text: user.translations, deleted: user.deleted});

    const state = {
        translations,
        setTranslations
    }

    return (
        <TranslationsContext.Provider value={state}>
            {children}
        </TranslationsContext.Provider>
    )
}

export default TranslationsProvider;