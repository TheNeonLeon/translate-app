import React, { useEffect, useState } from 'react';
import TranslationList from './TranslationList';
import { STORAGE_KEY_USER } from '../../storage/storageKeys';
import { useTranslations } from '../../context/TranslationsContext';
import { userById } from '../../api/user';
import { useUser } from '../../context/UserContext';
import { get } from 'react-hook-form';
import { readTheStorage } from '../../storage/storage';
import { useNavigate } from 'react-router-dom';
import withAuth from '../../hoc/withAuth';


 const Profile = () => {
  const userStorage = readTheStorage(STORAGE_KEY_USER);

  const [user, setUser] = useUser();
  console.log(user);
  console.log(user.username);

  const navigate = useNavigate();


const logOutButton = () => {
  navigate("/");
  localStorage.clear();
    window.location.reload();

  console.log("User logged out");
}

  const handleDelete = () => {

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

export default withAuth(Profile)
