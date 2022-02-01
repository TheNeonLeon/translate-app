//Imports
import { Navigate } from "react-router-dom";
import { readTheStorage } from "../storage/storage";
import { STORAGE_KEY_USER } from "../storage/storageKeys";

const withAuth = Component => props => {
    const user = readTheStorage(STORAGE_KEY_USER);
    if (user !== null) {
        //render out the component
        console.log("WithAuth - Render new page!")
        return <Component {...props}/>
    } else {
        //Navigate back to Login
        console.log("WithAuth - Render start page!")
        return <Navigate to = "/"/>
    }
}
export default withAuth;