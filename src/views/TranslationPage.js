import React from 'react';
import TranslationUserInputForm from '../components/Translation/TranslationUserInputForm';
import TranslationOutputBox from '../components/Translation/TranslationOutputBox';

const TranslationPage = () => {

const processText = (text) => {
  const chars = text.split("");
}

  return (
    <div>
      <TranslationUserInputForm performTranslation="processText" />
      <TranslationOutputBox translation="translation"/>
    </div>
  )
};

export default TranslationPage;
