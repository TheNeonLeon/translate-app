//Imports
import { createContext, useContext, useState } from "react";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

//UserContext - a context to exposing the value
const UserContext = createContext();

//exposing the value
export const useUser = () => {
    return useContext(UserContext);
}
//export const TodosContext = createContext([[],() => {}])

//UserProvider - a provider to managing state
const UserProvider = ({ children }) => {

    const [ user, setUser ] = useState(null);

    const state = [
        user,
        setUser
    ]
    return (
        <UserContext.Provider value = { state }>
            { children }
        </UserContext.Provider>
    )
}
export default UserProvider;