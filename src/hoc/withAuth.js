//Imports
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const withAuth = Component => props => {
    const { user } = useUser()
    if (user !== null) {
        //render out the component
        return <Component {...props}/>
    } else {
        //Navigate back to Login
        return <Navigate to = "/"/>
    }
}
export default withAuth;