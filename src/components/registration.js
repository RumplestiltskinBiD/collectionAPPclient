import React, {useState} from "react";
import {Trans, useTranslation} from "react-i18next";
import InputControlled from "../inputs/inputs";
import {login, registration} from "../actions/actionsUser";
import {useDispatch} from "react-redux";

const Registration = () => {
    const {t} = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()

    return (
            <div className="registration">
                <div className="content">
                    <Trans i18nKey="description.part1">
                        Registration
                    </Trans>
                </div>
                <InputControlled value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <InputControlled value={password} setValue={setPassword} type="password" placeholder={t('description.part4')}/>
                <button className="registration_submit" onClick={() => registration(email, password)
                    .then(() => dispatch(login(email, password)))}>{t('description.part1')}</button>
            </div>
    )
}

export default Registration


