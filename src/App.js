import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useContext, useEffect, useState} from 'react';
import {Context} from './index';
import {check} from './http/userApi';
import {observer} from 'mobx-react-lite';
import ReactLoading from "react-loading"
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './assets/css/style.css'
import "./assets/js/main.js"
import "./assets/vendor/bootstrap-icons/bootstrap-icons.css"
import {authRoutes, publicRoutes} from "./routes";
import 'dayjs/locale/ru'
import dayjs from "dayjs";
import avatar from "./assets/img/profile-img.jpg"

dayjs.locale('ru')

export const avatarPicture = (userWithAvatar) => {
    if (userWithAvatar.avatar) {
        return "http://localhost:8080/api/media/" + userWithAvatar.avatar.id
    } else {
        return avatar
    }
}

const App = observer((props) => {

    const [loading, setLoading] = useState(true);
    const {user} = useContext(Context);

    useEffect(() => {
        setTimeout(()=>{
            setLoading(true)
            check().then(data => {
                user.setUser(data.data)
                console.log(data.data)
                user.setIsAuth(true)
            }).finally(() => setLoading(false))
        },100)
    }, [])


    if (loading) {
        return (<div className={"d-flex min-vh-100 align-items-center justify-content-center"}><ReactLoading
            className={"col-md-8 mx-auto h-100"} type={"bubbles"} color={"blue"} height={'20vh'}
            width={'20vh'}></ReactLoading></div>)
    } else {
        console.log(user.isPM)
        console.log(user.user?.roles?.includes("PROJECT_MANAGER"))
        return (
            <div className="App">
                <BrowserRouter>
                    <div>
                        <Routes>
                            {!user.isAuth && publicRoutes.map(({path, Component}) => <Route path={path}
                                                                                            Component={Component}/>)}
                            {user.isAuth && authRoutes.map(({path, Component}) => <Route path={path}
                                                                                         Component={Component}/>)}
                        </Routes>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
})

export default App;