import React, { useState } from 'react';
import TranslationList from './TranslationList';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';

 const Profile = () => {
  const text = JSON.parse(localStorage.getItem('translations'));

  const [translation, setTranslation] = useState([{text: text.text, deleted: text.deleted}])

  

  console.log(translation)

const getBooleans = translation[0].deleted;

const logOutButton = () => {
  localStorage.clear();
  window.location.reload();
  console.log("User logged out")
}

  const handleDelete = () => {
  let go =  getBooleans.forEach(element => element = true)

    translation[0].text = []

  console.log(go)
  console.log("Translations:", translation[0])
}

  return (
    <>
    <TranslationList />
    <button onClick={logOutButton}>Log out</button>
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
