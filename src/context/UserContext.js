import { createContext, useContext } from "react";

const UserContext = createContext();

//exposing the value
export const useUser = () => {
    return useContext(UserContext);
}


const UserProvider = () => {
    return (
        <UserContext.Provider>

        </UserContext.Provider>
    )
}
export default UserProvider;