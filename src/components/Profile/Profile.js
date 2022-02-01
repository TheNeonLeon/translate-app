import React, { useEffect, useState } from 'react';
import TranslationList from './TranslationList';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';
import { useTranslations } from '../../context/TranslationsContext';
import { userById } from '../../api/user';
import { useUser } from '../../context/UserContext';
import { get } from 'react-hook-form';
import { readTheStorage } from '../../storage/storage';
import { useNavigate } from 'react-router-dom';

 const Profile = () => {
  const userStorage = readTheStorage(STORAGE_KEY_USER);
  
  
  // const [translation, setTranslation] = useState([{text: text.text, deleted: text.deleted}])
  // const {translation, setTranslation} = useTranslations()
  const [user, setUser] = useUser();
  console.log(user);
  console.log(user.username);

  // const text = user.translation;


  // const getBooleans = translation[0].deleted;
  const navigate = useNavigate();


const logOutButton = () => {
  localStorage.clear();
   window.location.reload();
   navigate("/");
  console.log("User logged out");
}

  const handleDelete = () => {
  // let go =  getBooleans.forEach(element => element = true);

  // let getText = translation[0].text;
  // console.log(getText);
  // getText.slice(Math.max(getText.length - 10, 1));

  // // console.log(go);
  // console.log("Translations:", translation[0]);
}

  return (
    <>
    <TranslationList />
    <button onClick={logOutButton}>Log out</button>
        <h1>Profile</h1>
        <h3>Welcome <u>{user.username}</u></h3>
        <ul>
          <li>
           {user.translations}
           </li>
        </ul>
        <button onClick={handleDelete}>Delete translations</button>
    </>
  )
};

export default Profile
