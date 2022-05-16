import {Trans, useTranslation} from "react-i18next";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import InputControlled from "../inputs/inputs";
import {login} from "../actions/actionsUser";

const Login = () => {
    const { t } = useTranslation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch()
    return (
            <div className="login">
                <div className="content">
                    <Trans i18nKey="description.part3">
                       Login
                    </Trans>
                </div>
                <InputControlled value={email} setValue={setEmail} type="text" placeholder="Email"/>
                <InputControlled value={password} setValue={setPassword} type="password" placeholder={t('description.part4')}/>
                <button className="login_submit" onClick={() => dispatch(login(email, password))} >{t('description.part3')}</button>
            </div>
    )
}
export default Login