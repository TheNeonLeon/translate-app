import { useEffect } from "react";
import { appendErrors, useForm } from "react-hook-form";
import { Navigate } from "react-router-dom";

//Variable that shows the user needs to input a name
const usernameRequirement = {
    required: true,
    minLength: 2
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
        
    }

    console.log(errors)
        //Effect - function to navigate to Translation Page if username is output
        
        

        //displayErrorMessage - function that display error message if requirements not succeeding

        return (
        <>
            <form onSubmit={ handleSubmit(onSubmit) }>
                <label htmlFor='username'>⌨ | </label>
                <input 
                type = 'text' 
                {...register('username', usernameRequirement)} 
                placeholder = 'What is your name?'/>

                <button type = 'submit'>▶</button><br></br>
                { (errors.username && errors.username.type === 'required') && <span>You need to enter your name</span>}
                { (errors.username && errors.username.type === 'minLength') && <span>The name is too short ... (min.2)</span>}
            </form>
        </>
        )
}
export default LoginForm;