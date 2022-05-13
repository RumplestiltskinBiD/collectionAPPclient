import React, {useEffect, useState} from "react";
import Logo from "./imageLogo/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import {useTranslation, Trans} from "react-i18next";
import {BrowserRouter, Routes, Route, NavLink, Navigate} from "react-router-dom"
import Registration from "./components/registration";
import Login from "./components/login";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "./reducers/userReducer";
import {auth} from "./actions/actionsUser";
import UserPage from "./components/userPage/userPage";
import MainPage from "./components/mainPage/mainPage";
import {getAllItems, getItems, searchItems} from "./actions/actionsItem";
import {showLoader} from "./reducers/appReducer";
import AdminPage from "./components/adminPage/adminPage";



const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Русский' }
};

function App() {
    const { t, i18n } = useTranslation();
    const isAuth = useSelector(state => state.user.isAuth)
    const currentColl = useSelector(state => state.collection.currentColl)
    console.log(isAuth)
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
        } if(isAuth) {
            dispatch(getItems(currentColl))
        } else {
            dispatch(getAllItems(currentColl))
        }
    }

    return (
      <BrowserRouter>
        <div className="app">
            <Navbar bg="info" variant="dark" sticky="top" expand="sm">
                <Navbar.Brand>
                    <img src={Logo} alt=''/>
                </Navbar.Brand>

                <Navbar.Toggle/>
                    <Navbar.Collapse>
                        <Nav>

                                <input
                                    value={searchName}
                                    onChange={e => searchChangeHandler(e)}
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-outline-success" type="submit">Search</button>


                            {!isAuth && <NavLink to="/registration" className="btn btn-primary">{t('description.part1')}</NavLink>}
                            {!isAuth && <NavLink to="/login" className="btn btn-primary">{t('description.part3')}</NavLink>}
                            <NavDropdown title={t('description.part2')}>
                        {Object.keys(lngs).map((lng) => (
                                <NavDropdown.Item key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }}
                                                  type="submit" onClick={() => i18n.changeLanguage(lng)}>
                                {lngs[lng].nativeName}
                                </NavDropdown.Item>
                        ))}
                            </NavDropdown>
                            {isAuth && <button className="logout" onClick={() => dispatch(logout())}>Exit</button>}
                            <NavLink to="/mainpage" className="btn btn-primary">Main page</NavLink>
                            {isAuth && <NavLink to="/adminpage" className="btn btn-primary">Admin page</NavLink>}
                        </Nav>
                    </Navbar.Collapse>


            </Navbar>

            <div>
                {!isAuth ?
                    <Routes>
                        <Route path="/registration" element={<Registration/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/mainpage" element={<MainPage/>}/>

                        <Route path="*" element={<Navigate replace to="/login" />} />
                    </Routes>
                    :
                    <Routes>
                        {/*<Route exact path="/userpage" element={<UserPage/>}/>
                        <Route path="/" element={<MainPage/>}/>*/}
                        <Route path="/" element={<UserPage/>}/>
                        <Route path="/mainpage" element={<MainPage/>}/>
                        <Route path="/adminpage" element={<AdminPage/>}/>
                        <Route path="*" element={<Navigate replace to="/" />} />
                    </Routes>
                }
            </div>


        </div>
    </BrowserRouter>
  );
}

export default App;
