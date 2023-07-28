import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import jp from '../translation/jp.json';
import Backend from 'i18next-http-backend';

const resources = {
  jp: {
    translation: jp
  }
};

i18n.use(Backend).use(initReactI18next).init({
  debug: true,
  lng: 'jp',
  resources
});

export default i18n;
