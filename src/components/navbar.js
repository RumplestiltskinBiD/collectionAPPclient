import React, {useEffect, useState} from 'react';
import Logo from "../imageLogo/Logo.svg";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {logout} from "../reducers/userReducer";
import {auth} from "../actions/actionsUser";
import {showLoader} from "../reducers/appReducer";
import {getAllItems, getItems, searchItems} from "../actions/actionsItem";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import './NavbarStyle.css'

const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Русский' }
};

const NavbarTop = () => {
    const { t, i18n } = useTranslation();
    const isAuth = useSelector(state => state.user.isAuth)
    const isAdmin = useSelector(state => state.user.userRoles)
    const currentColl = useSelector(state => state.collection.currentColl)
    const dispatch = useDispatch()
    const [searchName, setSearchName] = useState('')
    const [searchTimeout, setSearchTimeout] = useState(false)

    useEffect(() => {
        dispatch(auth())
    }, [])

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        dispatch(showLoader())
        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchItems(value))
            }, 500, e.target.value))
        }
        if(isAuth) {
            dispatch(getItems(currentColl))
        }
        else {
            dispatch(getAllItems(currentColl))
        }
    }

    return (
        <div>
            <Navbar variant="dark" sticky="top" expand="sm">
                <Navbar.Brand>
                    <img src={Logo} alt=''/>
                </Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav>
                        <NavLink to="/mainpage" className="btn btn-home">{t('description.part5')}</NavLink>
                        {isAuth ? <NavLink to="/" className="btn btn-mypage">{t('description.part18')}</NavLink> : <div className='foraling'></div>}
                        <input
                            value={searchName}
                            onChange={e => searchChangeHandler(e)}
                            className="form-control search"
                            type="search"
                            placeholder={t('description.part6')}
                            aria-label="Search"
                        />
                        {!isAuth && <NavLink to="/login" className="btn btn-login">{t('description.part3')}</NavLink>}
                        {isAdmin == 'ADMIN' ? <NavLink to="/adminpage" className="btn btn-login">{t('description.part16')}</NavLink> : null}
                        {!isAuth && <NavLink to="/registration" className="btn btn-signup">{t('description.part1')}</NavLink>}
                        {isAuth && <button className="btn btn-logout" onClick={() => dispatch(logout())}>{t('description.part17')}</button>}
                        <NavDropdown menuVariant="dark" title={t('description.part2')}>
                            {Object.keys(lngs).map((lng) => (
                                <NavDropdown.Item key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                                                  type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                    {lngs[lng].nativeName}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavbarTop;