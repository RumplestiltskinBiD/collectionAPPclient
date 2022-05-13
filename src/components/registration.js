import React, {useState} from "react";
import {Trans, useTranslation} from "react-i18next";
import InputControlled from "../inputs/inputs";
import {registration} from "../actions/actionsUser";





const Registration = () => {
    const {t, i18n} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (

            <div className="registration">
                <div className="content">
                    <Trans i18nKey="description.part1">
                        Registration
                    </Trans>
                </div>
                <InputControlled value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <InputControlled value={password} setValue={setPassword} type="password" placeholder={t('description.part4')}/>

            {/*<input className="email" type="text" placeholder="Email"/>
            <input className="password" type="password" placeholder={t('description.part4')}/>
            <input className="repeatPassword" type="password" placeholder={t('description.part5')}/>*/}
                <button className="registration_submit" onClick={() => registration(email, password)}>{t('description.part1')}</button>
            </div>

    )
}

export default Registration


