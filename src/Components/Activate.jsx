import React, {useEffect, useState} from 'react';
import logo from '../assets/img/not-found.svg'
import {activateUser} from "../http/userApi";
import {NavLink, useParams} from "react-router-dom";
import ReactLoading from "react-loading";

const Activate = () => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const {token} = useParams();

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            activateUser(token).then((response) => {
                if (response.status === 200) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
            }).finally(() => {
                setLoading(false);
            })
        }, 100)
    }, []);

    if (loading) {
        return (<div className={"d-flex min-vh-100 align-items-center justify-content-center"}><ReactLoading
            className={"col-md-8 mx-auto h-100"} type={"bubbles"} color={"blue"} height={'20vh'}
            width={'20vh'}></ReactLoading></div>)
    } else
        return (
            <main>
                <div className="container">
                    <section
                        className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                        <h2>{success ? 'Успешная активация аккаунта' : 'Токен не действителен'}</h2>
                        {success &&
                            <NavLink to='login' className="btn">Войти в активированный аккаунт</NavLink>
                        }
                        {!success &&
                            <NavLink to='login' className="btn">Зарегистрироваться</NavLink>
                        }
                        <img src={logo} className="img-fluid py-5" alt="Activation"/>
                        <div className="credits">
                            Разработано <a target='_blank' href="https://github.com/PostBeer">PostBeerTeam</a>
                        </div>
                    </section>

                </div>
            </main>
        );
};

export default Activate;