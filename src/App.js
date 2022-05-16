import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Registration from "./components/registration";
import Login from "./components/login";
import {useSelector} from "react-redux";
import UserPage from "./components/userPage/userPage";
import MainPage from "./components/mainPage/mainPage";
import AdminPage from "./components/adminPage/adminPage";
import NavbarTop from "./components/navbar";

function App() {
    const isAuth = useSelector(state => state.user.isAuth)

    return (
      <BrowserRouter>
        <div className="app">
            <NavbarTop />
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
