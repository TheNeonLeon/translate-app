//Imports
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { userLogin } from '../../api/user';
import { useUser } from "../../context/UserContext";
import { saveToStorage } from "../../storage/storage";
import { STORAGE_KEY_USER } from "../../storage/storageKeys";

const usernameRequirement = {
    //Variable that shows the user needs to input a name
    required: true
}


const LoginForm = () => {
    //LoginForm - Function to Login
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const [ user, setUser ] = useUser();

    const navigation = useNavigate()

    //state - for showing you pressed the button and are continuing
    const [ loadingText, setLoadingText ] = useState(false);
    //state - for showing API error message
    const [ errorMessageApi, setApiError ] = useState(null);

    
    useEffect(() => {
        //useEffect - side effect to navigate to Translation Page if input of name was successful
        if (user !== null) {
            navigation('translation')
        }
    }, [ user, navigation ])

    
    const onSubmit = async ({ username }) => {
        //onSubmit - function that prevents page from reloading.
        //This method sorts out the user, fetching existing user based on the username or creates a new one and updates state.
        setLoadingText(true)
        const [ error, responseOfUser ] = await userLogin(username)
        if (error !== null) {
            setApiError(error)
        }
        if (responseOfUser !== null) {
            saveToStorage(STORAGE_KEY_USER, responseOfUser)
            setUser(responseOfUser)
        }
        setLoadingText(false)
    };

    
    const displayErrorMessage = (() => {
        //displayErrorMessage - render function that display error message if the username requirement is not succeeding
        if (!errors.username) {
            return null
        }
        if (errors.username.type === 'required') {
            return <span>Enter name please...</span>
        }
    })()

        return (
        <>

            <form onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor='username'>⌨ | </label>
                <input 
                    type = 'text' 
                    placeholder = "What's your name?"
                    {...register('username', usernameRequirement)} 
                />
                <button type = 'submit' disabled={ loadingText }>▶</button><br></br>
                { displayErrorMessage }
                { loadingText && <p>To be continued...</p>}
                { errorMessageApi && <p>{ errorMessageApi }</p>}
            </form>  
        </>
        )
}
export default LoginForm;