//Imports
import { useEffect } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";
import { userLogin } from '../../api/user'

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

    //onSubmit - function that prevents page from reloading
    const onSubmit = async ({ username }) => {
        const [ error, user] = await userLogin(username)
        console.log('Error in the login:', error)
        console.log('The user', user)
    };

    console.log(errors)

    //displayErrorMessage - function that display error message if th username requirements is not succeeding
    const displayErrorMessage = (() => {
        if (!errors.username) {
            return null
        }

        if (errors.username.type === 'required') {
            return <span>You must enter your name to proceed</span>
        }
    })()
        //Effect - function to navigate to Translation Page if username is output

        

        return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor='username'>⌨ | </label>
                <input 
                type = 'text' 
                {...register('username', usernameRequirement)} 
                placeholder = "What's your name?"/>

                <button type = 'submit'>▶</button><br></br>
                { displayErrorMessage }
            </form>
        </>
        )
}
export default LoginForm;