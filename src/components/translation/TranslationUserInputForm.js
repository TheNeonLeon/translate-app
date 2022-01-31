import React, { useEffect, useState } from 'react';
import {useForm} from 'react-hook-form'

const translationConfig = {
    required: true
}
const TranslationUserInputForm = (props) => {
    const {register, handleSubmit, formState: {errors}} = useForm();
    /*const [translations, setTranslations] = useState([]);
    const [user, setUser] = useState([]);
    useEffect(() => {

    }, []);*/



    const onSubmit = async ({translationInput}) => {
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
                    <button type="submit" >Translate</button>
                    {errorMessage}
                </fieldset>
            </form>
        </>
    )
};

export default TranslationUserInputForm;