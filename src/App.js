import React, {useState} from "react";
import Logo from "./imageLogo/logo.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import './App.css';
import {useTranslation, Trans} from "react-i18next";
import {BrowserRouter, Routes, Route, NavLink, Link} from "react-router-dom"
import Registration from "./components/registration";



const lngs = {
    en: { nativeName: 'English' },
    ru: { nativeName: 'Русский' }
};

function App() {
    const { t, i18n } = useTranslation();

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
                            <form>
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                                <button className="btn btn-outline-success" type="submit">Search</button>

                            </form>
                            <NavLink to="/registration" className="btn btn-primary">{t('description.part2')}</NavLink> {/*Вот кнопку вставил - переключение на регистацию*/}

                            <NavDropdown title="Language">
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

            <div>
                <Routes>
                    <Route path="/registration" element={<Registration />} />
                    {/*<Route exact path="/users" component={Users} />
                    <Route exact path="/login" component={Login} />*/}
                </Routes>
            </div>


        </div>
    </BrowserRouter>
  );
}

export default App;
