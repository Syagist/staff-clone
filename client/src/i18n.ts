import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './locales/en/translation.json';
import ruTranslation from './locales/ru/translation.json';
import amTranslation from './locales/am/translation.json';

const resources = {
    en: { translation: enTranslation },
    ru: { translation: ruTranslation },
    am: { translation: amTranslation },
};


i18n.use(initReactI18next).init({
    resources,
    lng: 'en',
    fallbackLng:  'en',
    interpolation: {
        escapeValue: true,
    },
});

export default i18n;