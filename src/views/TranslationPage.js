import {React, useState, useEffect} from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';
import withAuth from '../hoc/withAuth';
import { useTranslations } from '../context/TranslationsContext';
import { STORAGE_KEY_USER } from '../storage/storageKeys';
import { saveToStorage } from '../storage/storage';


const TranslationPage = () => {
  const user = JSON.parse(localStorage.getItem(STORAGE_KEY_USER));
  const [translations, setTranslations] = useTranslations();
  const [translationArray, setTranslationArray] = useState([]);
  const processText = (text) => {
    setTranslations({text: [...translations.text, text], deleted: [...translations.deleted, false]});
    user.translations = [...translations.text];
    user.deleted = [...translations.deleted]
    saveToStorage(STORAGE_KEY_USER, user);
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

export default withAuth(TranslationPage);
