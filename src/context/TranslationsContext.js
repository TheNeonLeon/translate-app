import { createContext, useContext, useState } from "react";

const TranslationsContext = createContext();


export const useTranslations = () => {
    return useContext(TranslationsContext);
}

const storageRead = (key) => {
    const user = localStorage.getItem(key);
    return user.translations;
}

const TranslationsProvider = ({children}) => {

    const [translations, setTranslations] = useState(storageRead('user'));

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