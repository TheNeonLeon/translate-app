import React from 'react';
import {useForm} from 'react-hook-form'

const translationConfig = {
    required: true
}
const TranslationUserInputForm = (props) => {
    const {translate, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = ({translationInput}) => {
        
        props.performTranslation(translationInput);
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <label htmlFor="translationInput">Text to translate: </label>
                    <input type="text"  {...translate("translationInput", translationConfig)} />
                    {errorMessage}
                </fieldset>
                <button type="submit" >Translate</button>
            </form>
        </>
    )
};

export default TranslationUserInputForm;