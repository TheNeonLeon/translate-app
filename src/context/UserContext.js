//Imports
import { createContext, useContext, useState } from "react";

//UserContext - a context for exposing the value
const UserContext = createContext();


export const useUser = () => {
    //exposing the value
    return useContext(UserContext);
}

const UserProvider = ({ children }) => {
    //The provider where a state is initialized before making the state available to the user.
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