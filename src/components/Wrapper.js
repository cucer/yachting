import React, { useState } from 'react';
import { IntlProvider } from 'react-intl';
import Turkish from '../languages/tr-TR.json';
import English from '../languages/en-US.json';

export const Context = React.createContext();

const local = navigator.language;

let lang;
if (
  local === 'tr-TR' ||
  local === 'tr-tr' ||
  local === 'tr' ||
  local === 'TR'
) {
  lang = Turkish;
} else if (
  local === 'en-US' ||
  local === 'en-us' ||
  local === 'en' ||
  local === 'EN'
) {
  lang = English;
}

const Wrapper = (props) => {
  const [locale, setLocale] = useState(local);
  const [messages, setMessages] = useState(lang);

  function selectLang(e) {
    const newLocale = e.target.value;
    setLocale(newLocale);

    if (
      newLocale === 'tr-TR' ||
      newLocale === 'tr-tr' ||
      newLocale === 'tr' ||
      newLocale === 'TR'
    ) {
      setMessages(Turkish);
    } else if (
      newLocale === 'en-US' ||
      newLocale === 'en-us' ||
      newLocale === 'en' ||
      newLocale === 'EN'
    ) {
      setMessages(English);
    }
  }

  return (
    <Context.Provider value={{ locale, selectLang }}>
      <IntlProvider locale={locale} messages={messages}>
        {props.children}
      </IntlProvider>
    </Context.Provider>
  );
};

export default Wrapper;
