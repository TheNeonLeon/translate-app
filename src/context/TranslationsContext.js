import { createContext, useContext, useState } from "react";

export const TranslationsContext = createContext();


export const useTranslations = () => {
    return useContext(TranslationsContext);
}

/*const storageRead = (key) => {
    const user = localStorage.getItem(key);
    return user.translations;
}*/

const TranslationsProvider = ({children}) => {

    const [translations, setTranslations] = useState(null);

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