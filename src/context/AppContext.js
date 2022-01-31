import UserProvider from "./UserContext";
import TranslationsProvider from "./TranslationsContext";

const AppContext = ({children}) => {
    
    return (
        <UserProvider>
            <TranslationsProvider>
                { children }
            </TranslationsProvider>
        </UserProvider>
    )
}
export default AppContext;
