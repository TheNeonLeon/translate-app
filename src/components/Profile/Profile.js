import React, { useState } from 'react';
import TranslationList from './TranslationList';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';

 const Profile = () => {
  const text = JSON.parse(localStorage.getItem('translations'));

  const [translation, setTranslation] = useState([{text: text.text, deleted: text.deleted}])

  const translations = localStorage.getItem('translations');
  

  console.log(translation)


  const handleDelete = () => {
   
  
  console.log("Translations:", translation)
}

  return (
    <>
    <TranslationList />
        <h1>Profile</h1>
        <ul>
          {translation.map(text => 
            <li key={text}>
              <p>{text.text}</p>
            </li>
          )}
        </ul>
        <button onClick={handleDelete}>Delete translations</button>
    </>
  )
};

export default Profile
