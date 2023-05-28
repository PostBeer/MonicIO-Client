import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";
import React, {useState} from "react";
import {sendCallback} from "../http/userApi";

export const Contact = () => {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [theme, setTheme] = useState();
    const [message, setMessage] = useState();
    const [error, setError] = useState();
    const [alert, setAlert] = useState(false);
    const callbackFunction = async () => {
        await sendCallback(name, email, theme, message).then(() => {
            setName('');
            setEmail('');
            setTheme('');
            setMessage('');
            setError();
            setAlert(true);
        }).catch(errors => {
            setError(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
        });
    }

    return (
        <div>
            <Header/>
            <SideBar/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Контактная информация</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Главная</NavLink></li>
                            <li className="breadcrumb-item">О нас</li>
                            <li className="breadcrumb-item active">Контактная информация</li>
                        </ol>
                    </nav>
                </div>

                <section className="section contact">

                    <div className="row gy-4">

                        <div className="col-xl-6">

                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-geo-alt"></i>
                                        <h3>Адрес</h3>
                                        <p>Пр. Вернадского 78,<br/>Москва, 119454</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-telephone"></i>
                                        <h3>Позвоните нам</h3>
                                        <p>8 985 366 14 11</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-envelope"></i>
                                        <h3>Наш Email</h3>
                                        <p>postbeer322@gmail.com</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="info-box card">
                                        <i className="bi bi-clock"></i>
                                        <h3>Часы работы</h3>
                                        <p>Понедельник - Пятница<br/>9:00 - 17:00</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className="col-xl-6">
                            <div className="card p-4">
                                <div className="php-email-form">
                                    {alert &&
                                        <div className="alert alert-success alert-dismissible fade show"
                                             role="alert">
                                            <i className="bi bi-check-circle me-1"></i>
                                            Ваше мнение очень важно для нас. Мы прочитаем ваше сообщение.
                                            <button type="button" className="btn-close"
                                                    data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    }
                                    <div className="row gy-4">

                                        <div className="col-md-6">
                                            <input type="text" name="name"
                                                   placeholder="Ваше имя"
                                                   className={error?.name ? "form-control is-invalid" : "form-control"}
                                                   value={name}
                                                   onChange={(e) => {
                                                       setName(e.target.value)
                                                   }}
                                                   required/>
                                            <div className="invalid-feedback">{error?.name}</div>
                                        </div>


                                        <div className="col-md-6 ">
                                            <input type="email" name="email"
                                                   className={error?.email ? "form-control is-invalid" : "form-control"}
                                                   value={email}
                                                   onChange={(e) => {
                                                       setEmail(e.target.value)
                                                   }}
                                                   placeholder="Ваш Email" required/>
                                            <div className="invalid-feedback">{error?.email}</div>
                                        </div>


                                        <div className="col-md-12">
                                            <input type="text" name="theme"
                                                   placeholder="Тема"
                                                   className={error?.theme ? "form-control is-invalid" : "form-control"}
                                                   value={theme}
                                                   onChange={(e) => {
                                                       setTheme(e.target.value)
                                                   }}
                                                   required/>
                                            <div className="invalid-feedback">{error?.theme}</div>
                                        </div>


                                        <div className="col-md-12">
                                        <textarea name="message" rows="6"
                                                  placeholder="Сообщение"
                                                  className={error?.message ? "form-control is-invalid" : "form-control"}
                                                  value={message}
                                                  onChange={(e) => {
                                                      setMessage(e.target.value)
                                                  }}
                                                  required></textarea>
                                            <div className="invalid-feedback">{error?.message}</div>
                                        </div>


                                        <div className="col-md-12 text-center">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>

                                            <button onClick={callbackFunction} className='btn btn-primary'>Отправить
                                                сообщение
                                            </button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                </section>

            </main>
            <Footer/>
        </div>
    );
};