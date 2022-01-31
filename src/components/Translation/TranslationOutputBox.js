import React from 'react';
const TranslationOutputBox = ({translation}) => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const translate = translation.map((character, index) => {
        if(!alphabet.includes(character.toLowerCase())){
            return;
        }
        const char = character.toLowerCase();
        const filepath = "assets/"+char+".png" 
        return (
            //<span key={index}><img src={`.../assets/${char}.png`} alt={`A sign-language-sign corresponding to the letter ${char}`}></img></span>
            <span key={index}><img contentEditable="false" src={filepath} alt='A sign-language-sign corresponding to a letter of the alphabet.' width="70" height="70"/></span>
        );
    }); //{translation.length > 0 ? translate : <></>}

    return (
        //<textarea readOnly value={translate}>
            
        //</textarea>
        <div id="imagefield">

            {translate}
      
        </div>
    )
}
export default TranslationOutputBox