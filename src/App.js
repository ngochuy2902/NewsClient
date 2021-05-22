import './App.css';
import {Register} from "./Components/Auth/Register/Register";
import {Header} from "./Components/Header/Header";
import {MainPage} from "./Components/Main/MainPage";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Login} from "./Components/Auth/Login/Login";
import {Dashboard} from "./Components/Dashboard/Dashboard";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {ArticleDetail} from "./Components/Article/ArticleDetail";
import {ArticlesCategory} from "./Components/Article/ArticlesCategory";

function App() {
    const [isLogin, setIsLogin] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const checkToken = (token) => {
        axios.get('http://localhost:8080/api/user/me', {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        })
            .then(res => {
                let userInfo = res.data;
                console.log('role = ', res.data['roles']);

                if (userInfo['roles'].includes('ROLE_ADMIN')) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
                setIsLogin(true);

            })
            .catch(error => {
                console.log(error);
                setIsLogin(false);
                setIsAdmin(false);
            });
    }

    useEffect(() => {
        const accessToken = localStorage.getItem('token');
        if (accessToken != null) {
            checkToken(accessToken);
        } else {
            setIsLogin(false);
            setIsAdmin(false);
        }
    }, [isLogin])
    return (
        <div className='App'>
            <BrowserRouter>
                <Header isLogin={isLogin} setIsLogin={setIsLogin} isAdmin={isAdmin} setIsAdmin={setIsAdmin}/>

                <Switch>
                    <Route path={"/register"}>
                        <Register/>
                    </Route>
                    <Route path={"/login"}>
                        <Login isLogin={isLogin} setIsLogin={setIsLogin}/>
                    </Route>
                    <Route path={"/dashboard"}>
                        <Dashboard/>
                    </Route>
                    <Route path={"/article/:id"}>
                        <ArticleDetail/>
                    </Route>
                    <Route path={"/category/:categoryName"}>
                        <ArticlesCategory/>
                    </Route>
                    <Route path={"/"}>
                        <MainPage isLogin={isLogin}/>
                    </Route>
                </Switch>

            </BrowserRouter>
        </div>
    );
}

export default App;
