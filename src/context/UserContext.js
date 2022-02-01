//Imports
import { createContext, useContext, useState } from "react";

//UserContext - a context to exposing the value
const UserContext = createContext();

//exposing the value
export const useUser = () => {
    return useContext(UserContext);
}

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