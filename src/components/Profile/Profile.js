import React from 'react';
import TranslationList from './TranslationList';

 const Profile = () => {

  const translations = localStorage.getItem('translations');
  JSON.parse(translations)

  console.log(translations)
  const handleDelete = () => {
  //  let slice = translations.text.slice(Math.max(translations.text.length - 10, 1))
    localStorage.removeItem(translations)
  
  console.log(translations.text)
}

  return (
    <>
    <TranslationList />
        <h1>Profile</h1>
        <p>{translations}</p>
        <button onClick={handleDelete}>Delete translations</button>
    </>
  )
};

export default Profile
