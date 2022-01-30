import React from 'react';

const TranslationOutputBox = ({translation}) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const translate = translation.map((character) => {
        if(!alphabet.includes(character)){
            return <></>;
        }
        const char = character.toLowerCase();
        return (
            <span><img src={`.../assets/${char}.png`} alt={`A sign-language-sign corresponding to the letter ${char}`}></img></span>
        )
    })

    return (
        <textarea>
            {translation.length > 0 ? translate : <></>}
        </textarea>
    )
}
export default TranslationOutputBox