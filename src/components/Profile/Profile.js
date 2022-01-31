import React from 'react';
import TranslationList from './TranslationList';

 const Profile = () => {
  const translations = localStorage.getItem('translations');
  JSON.parse(translations)

  return (
    <>
    <TranslationList />
        <h1>Profile</h1>
        <button>Delete translations</button>
        <p>{translations}</p>
    </>
  )
};

export default Profile
