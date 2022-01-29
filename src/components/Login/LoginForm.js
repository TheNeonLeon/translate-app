import { useEffect } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

//Variable that shows the user needs to input a name
const usernameRequirement = {
    required: true
}

//Function to Login
const LoginForm = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    //onSubmit - prevents page from reloading
    const onSubmit = (data) => {
        console.log(data)
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
                placeholder = 'What is your name?'/>

                <button type = 'submit'>▶</button><br></br>
                { displayErrorMessage }
            </form>
        </>
        )
}
export default LoginForm;