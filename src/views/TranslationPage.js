import {React, useState, useEffect} from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';

const TranslationPage = () => {

  const [translationArray, setTranslationArray] = useState([]);

  const processText = (text) => {
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
