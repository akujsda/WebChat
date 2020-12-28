import React, {Fragment} from 'react';
import {IntlProvider} from 'react-intl';
import {LOCALES} from './locales';
import messages from './messages';

interface Props{
    children:React.ReactElement,
    locale:string,
}

const Provider:React.FC<Props> =({children, locale=LOCALES.ENGLISH},
):React.ReactElement=>{
  return (
  <IntlProvider
    locale={locale}
    textComponent={Fragment}
    messages={messages[locale]}
  >
    {children}
  </IntlProvider>
  )
};


export default Provider;
