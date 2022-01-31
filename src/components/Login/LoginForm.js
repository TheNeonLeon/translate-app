//Imports
import { useEffect, useState } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { userLogin } from '../../api/user';
import { readTheStorage, saveToStorage } from "../../storage/storage";
import './StyleFolder/Login.css';

//Variable that shows the user needs to input a name
const usernameRequirement = {
    required: true
}

//LoginForm - Function to Login
const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //state for showing you pressed the button and are continuing
    const [ loadingText, setLoadingText ] = useState(false);
    //state for showing API error message
    const [ errorMessageApi, setApiError ] = useState(null);

    //useEffect - side effect to navigate to Translation Page if input of name was successful
    useEffect(() => {}, [])

    //onSubmit - function that prevents page from reloading
    const onSubmit = async ({ username }) => {
        setLoadingText(true)
        const [ error, user ] = await userLogin(username)

        if (error !== null) {
            setApiError(error)
        }
        if (user !== null) {
            saveToStorage('LostInTranslation-User', user)
        }
        setLoadingText(false)
    };

    //displayErrorMessage - render function that display error message if the username requirement is not succeeding
    const displayErrorMessage = (() => {
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