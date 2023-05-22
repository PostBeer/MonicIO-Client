import {BrowserRouter, Route, Routes} from 'react-router-dom'
import React, {useContext, useEffect, useState} from 'react';
import {Context} from './index';
import {check, getToken} from './http/userApi';
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
import {loadProjects} from "./http/projectApi";

dayjs.locale('ru')

export const avatarPicture = (userWithAvatar) => {
    if (userWithAvatar.avatar) {
        return "http://localhost:8080/api/media/" + userWithAvatar.avatar.id
    } else {
        return avatar
    }
}

const App = observer(() => {

    const [loading, setLoading] = useState(true);
    const {user} = useContext(Context);
    const {projects} = useContext(Context)
    useEffect(() => {
        setTimeout(()=>{
            setLoading(true)
            check().then(data => {
                user.setUser(data.data)
                user.setIsAuth(true)
                user.setIsPM(data.data.roles.includes("PROJECT_MANAGER"))
                console.log(getToken())

            }).finally(() => setLoading(false))
            loadProjects(`http://localhost:8080/api/projects`).then((response) => {
                projects.setProjects(response.data._embedded.projects)
                projects.setLinks(response.data._links)
            })
        },100)
    }, [])


    if (loading) {
        return (<div className={"d-flex min-vh-100 align-items-center justify-content-center"}><ReactLoading
            className={"col-md-8 mx-auto h-100"} type={"bubbles"} color={"blue"} height={'20vh'}
            width={'20vh'}></ReactLoading></div>)
    } else {
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