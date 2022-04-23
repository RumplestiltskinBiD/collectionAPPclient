import {Trans, useTranslation} from "react-i18next";
import React from "react";



const Registration = () => {
    const { t, i18n } = useTranslation();

        return (
            <form>
                <div className="content">
                    <Trans i18nKey="description.part1">
                        Registration
                    </Trans>
                </div>

                <input className="email" type="text" placeholder="Email"/>
                <input className="password" type="password" placeholder="Password"/>
                <button className="submit" type="submit" >{t('description.part2')}</button>
            </form>
    )


}
export default Registration


