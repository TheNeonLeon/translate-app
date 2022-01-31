import React from 'react';
import { TranslationContext } from '../../context/TranslationsContext';

 const TranslationList = () => {

  const {translations} = TranslationContext()
  return (
    <TranslationList.Consumer>
  <div>
      <ul>
          {translations}
      </ul>
  </div>
  </TranslationList.Consumer>
  );
};

export default TranslationList