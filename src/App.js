import Header from './Components/Header/header';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import { useContext, useEffect} from 'react';
import {Context} from './index';
import { check } from './http/userApi';
import { observer } from 'mobx-react-lite';



import React from 'react';
const App = observer((props) => {
    const {user}= useContext(Context);

    useEffect(() => {
        check().then(data => {
            user.setUser(data)
            console.log(data)
            user.setIsAuth(true)
        })
    }, [])



    return (
        <BrowserRouter>
            <div>
                <Header />
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/register" element={<Register/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
})

export default App;