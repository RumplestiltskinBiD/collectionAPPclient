import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    description: {
                        part1: 'Registration',
                        part2: 'Language',
                        part3: 'Login',
                        part4: 'Password',
                        part5: 'Repeat password'
                    }
                }
            },
            ru: {
                translation: {
                    description: {
                        part1: 'Регистрация',
                        part2: 'Язык',
                        part3: 'Вход',
                        part4: 'Пароль',
                        part5: 'Повторите пароль'
                    }
                }
            }
        }
    });

export default i18n;