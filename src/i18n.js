import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import React from "react";

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next

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
                        part1: 'Sign up',
                        part2: 'English',
                        part3: 'Log in',
                        part4: 'Password',
                        part5: 'Home',
                        part6: 'Search',
                        part7: 'Recently added',
                        part8: 'Biggest Collections',
                        part9: 'Type',
                        part10: 'Collection',
                        part11: 'Item',
                        part12: 'Name',
                        part13: 'Not founded',
                        part14: 'My collections',
                        part15: 'My items',
                        part16: 'Admin page',
                        part17: 'Log out',
                        part18: 'My page',
                        part19: 'List of users'
                    }
                }
            },
            ru: {
                translation: {
                    description: {
                        part1: 'Регистрация',
                        part2: 'Русский',
                        part3: 'Вход',
                        part4: 'Пароль',
                        part5: 'Главная',
                        part6: 'Поиск',
                        part7: 'Недавно добавленные',
                        part8: 'Большие коллекции',
                        part9: 'Тип',
                        part10: 'Коллекция',
                        part11: 'Айтем',
                        part12: 'Название',
                        part13: 'Ничего не найдено',
                        part14: 'Мои коллекции',
                        part15: 'Мои айтемы',
                        part16: 'Админка',
                        part17: 'Выйти',
                        part18: 'Моя страница',
                        part19: 'Список пользователей'


                    }
                }
            }
        }
    });

export default i18n;