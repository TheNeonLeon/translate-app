import React from 'react';
import { useForm } from 'react-hook-form'
import arrow from '../../images/arrow.svg'
import './TranslationUserInput.css'

const translationConfig = {
    required: true
}
const TranslationUserInputForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    


    const onSubmit =({translationInput}) => {
        props.performTranslation(translationInput);
        document.getElementById("inputForm").reset();
    }

    const errorMessage = (() => {
        if(!errors.translationInput){
            return null;
        }
        if(errors.translationInput.type === 'required'){
            return <span>Input is required for a translation to be performed!</span>;
        }
    })()

    return (
        <>
            <form id="inputForm" onSubmit={handleSubmit(onSubmit)}>
                <fieldset id="translationInput">
                    <label htmlFor="translationInput">Text to translate: </label>
                    <input type="text"  {...register("translationInput", translationConfig)} />
                    <button className='translate-button' type="submit" ><img src={arrow}></img></button>
                    {errorMessage}
                </fieldset>
            </form>
        </>
    )
};

export default TranslationUserInputForm;