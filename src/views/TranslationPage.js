import {React, useState, useEffect} from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';
import withAuth from '../hoc/withAuth';
import { useTranslations } from '../context/TranslationsContext';
import { STORAGE_KEY_USER } from '../storage/storageKeys';
import { readTheStorage, saveToStorage } from '../storage/storage';
import { useUser } from '../context/UserContext';


const TranslationPage = () => {
  console.log("TranslationPage")
  //const user = readTheStorage(STORAGE_KEY_USER);
  const [user, setUser] = useUser();
  const [translationArray, setTranslationArray] = useState([]);
  const processText = (text) => {
    const newUser = {...user, translations: [...user.translations, text], deleted: [...user.deleted, false]};
    setUser(newUser);
    saveToStorage(STORAGE_KEY_USER, newUser);
    const chars = text.split("");
    setTranslationArray(chars);
  }
  /*useEffect(() => {

  }, [translationArray]);*/

    return (
      <div>
        <TranslationUserInputForm performTranslation={processText} />
        <TranslationOutputBox translation={translationArray}/>
      </div>
    )
  };

export default withAuth(TranslationPage);
