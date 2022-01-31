import { createContext, useContext, useState } from "react";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

//UserContext - a context to exposing the value
const UserContext = createContext();

//exposing the value
export const useUser = () => {
    return useContext(UserContext);
}

//UserProvider - a provider to managing state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(readTheStorage(STORAGE_KEY_USER));

    const state = {
        user,
        setUser
    }
    return (
        <UserContext.Provider value = { state }>
            { children }
        </UserContext.Provider>
    )
}
export default UserProvider;