import React, { useEffect, useState } from 'react';
import TranslationList from './TranslationList';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';
import { useUser } from '../../context/UserContext';
import {  saveToStorage } from '../../storage/storage';
import { patchTranslations } from '../../api/user';
import { useNavigate } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';

const Profile = () => {
  const [user, setUser] = useUser();
  const translations = [...user.translations];
  const deleted = [...user.deleted];

const alreadyDeleted = []
const translationsToDisplay = []
while(translationsToDisplay.length < 10 && translations.length > 0){
  const translation = translations.pop()
  const isDeleted = deleted.pop()
  if(isDeleted){
    alreadyDeleted.push(translation);
  }
  else{
    translationsToDisplay.push(translation);
  }
}
for(let i = 0; i < alreadyDeleted.length; i++){
  translations.push(alreadyDeleted[i]);
  deleted.push(true);
}

  /*useEffect(() => {
    // console.log('Translation changed')
    const findUser = async () => {
      const [error, latestUser] = await userById(user.id)
      if(error === null){
        setUser(latestUser)
      }
    }
    findUser()
  }, [setUser, user.id])*/


  const navigate = useNavigate();


const logOutButton = () => {
  navigate("/");
  localStorage.clear();
    window.location.reload();

  console.log("User logged out");
}


  const handleDelete = async() => {
    for(let i = 0; i < translationsToDisplay.length; i++){
      translations.push(translationsToDisplay[i]);
      deleted.push(true);
    }
    const payload = {translations, deleted};
    const [error, newUser] = await patchTranslations(user.id, payload);
    setUser(newUser);
    saveToStorage(STORAGE_KEY_USER, newUser);
}

  return (
    <>
    <TranslationList />
    <button onClick={logOutButton}>Log out</button>
        <h1>Profile</h1>
        <h3>Welcome <u>{user.username}</u></h3>
        <ul>
          {/* switch to user transaltions */}
          {translationsToDisplay.map((text, index) => 
            <li key={index}>
              {text}
            </li>
          )}
        </ul>
        <button onClick={handleDelete}>Delete translations</button>
    </>
  )
};
export default withAuth(Profile)
