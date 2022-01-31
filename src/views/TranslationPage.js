import {React, useState, useEffect} from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';

const TranslationPage = () => {

  const [translationArray, setTranslationArray] = useState([]);

  const processText = (text) => {
    const translations = JSON.parse(localStorage.getItem('translations'));
    if(translations){
      translations.text.push(text);
      translations.deleted.push(false);
      localStorage.setItem("translations", JSON.stringify(translations));
    }
    else{
      const newTranslations = {text: [], deleted: []};
      newTranslations.text.push(text);
      newTranslations.deleted.push(false);
      localStorage.setItem("translations", JSON.stringify(newTranslations));
    }
    const chars = text.split("");
    setTranslationArray(chars);
  }
  useEffect(() => {

  }, [translationArray]);

    return (
      <div>
        <TranslationUserInputForm performTranslation={processText} />
        <TranslationOutputBox translation={translationArray}/>
      </div>
    )
  };

export default TranslationPage;
