import React, {useContext, useState} from 'react';

import {Context} from "../index";
import dayjs from "dayjs";

import {observer} from "mobx-react-lite";
import {NavLink} from "react-router-dom";
import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {editPassword, editProfile} from "../http/userApi";
import {avatarPicture} from "../App";

const UserProfile = observer(() => {
        const {user} = useContext(Context)
        const [username, setUsername] = useState(user.user.username);
        const [name, setName] = useState(user.user.name);
        const [surname, setSurname] = useState(user.user.surname);
        const [email, setEmail] = useState(user.user.email);

        const [errors, setErrors] = useState();
        const [oldPassword, setOldPassword] = useState('');
        const [newPassword, setNewPassword] = useState('');
        const [newPasswordConfirm, setNewPasswordConfirm] = useState('');
        const [avatar, setAvatar] = useState();
        const [formLoading, setFormLoading] = useState(false);
        const [changePasswordComplete, setChangePasswordComplete] = useState(false);

        const changePassword = async () => {
            setFormLoading(true)
            setChangePasswordComplete(false)
            setErrors()
            await editPassword(oldPassword, newPassword, newPasswordConfirm).then(() => {
                setChangePasswordComplete(true)
            })
                .catch(errors => {
                    setErrors(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
                })
                .finally(() => setFormLoading(false))

        }

        const changeProfile = async () => {
            let formData = new FormData();
            let userInfo = {
                username: username,
                name: name,
                surname: surname,
                email: email
            }
            if (avatar) formData.append("file", avatar)
            formData.append("user", JSON.stringify(userInfo))
            setErrors()
            setFormLoading(true)
            await editProfile(formData)
                .then(response => {
                    if (!response.ok) {
                        response.json().then(
                            errors => {
                                setErrors(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
                            }
                        )
                    } else {
                        response.json().then(async (value) => {
                            user.setUser(value)
                            return value
                        })
                    }

                })
                .finally(() => setFormLoading(false))


        }

        return (
            <div>
                <Header/>

                <SideBar/>

                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Профиль</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="/home">Главная</NavLink></li>
                                <li className="breadcrumb-item">Пользователи</li>
                                <li className="breadcrumb-item active">Профиль</li>
                            </ol>
                        </nav>
                    </div>


                    <section className="section profile">
                        <div className="row">
                            <div className="col-xl-4">

                                <div className="card">
                                    <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">

                                        <img src={avatarPicture(user.user)} alt="Profile"
                                             className="rounded-circle"/>
                                        <h2>{user.user.surname + ' ' + user.user.name}</h2>
                                        <h3>{(user.isPM) ? "Руководитель проектов" : "Разработчик"}</h3>
                                        <div className="social-links mt-2">
                                            <NavLink to={'#'} className="twitter"><i className="bi bi-github"></i></NavLink>
                                            <NavLink to={'#'} className="facebook"><i
                                                className="bi bi-stack-overflow"></i></NavLink>
                                            <NavLink to={'#'} className="instagram"><i
                                                className="bi bi-google"></i></NavLink>
                                            <NavLink to={'#'} className="linkedin"><i
                                                className="bi bi-telegram"></i></NavLink>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="col-xl-8">

                                <div className="card">
                                    <div className="card-body pt-3">

                                        <ul className="nav nav-tabs nav-tabs-bordered">

                                            <li className="nav-item">
                                                <button className="nav-link active" data-bs-toggle="tab"
                                                        data-bs-target="#profile-overview">Обзор
                                                </button>
                                            </li>

                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#profile-edit">Редактирование профиля
                                                </button>
                                            </li>


                                            <li className="nav-item">
                                                <button className="nav-link" data-bs-toggle="tab"
                                                        data-bs-target="#profile-change-password">Смена пароля
                                                </button>
                                            </li>

                                        </ul>
                                        <div className="tab-content pt-2">

                                            <div className="tab-pane fade show active profile-overview"
                                                 id="profile-overview">

                                                <h5 className="card-title">Личные данные</h5>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Никнейм</div>
                                                    <div className="col-lg-9 col-md-8">{user.user.username}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label ">Полное имя</div>
                                                    <div
                                                        className="col-lg-9 col-md-8">{user.user.surname + ' ' + user.user.name}</div>
                                                </div>

                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Почта</div>
                                                    <div className="col-lg-9 col-md-8">{user.user.email}</div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-lg-3 col-md-4 label">Зарегистрирован с</div>
                                                    <div
                                                        className="col-lg-9 col-md-8">{dayjs(user.user.registrationDate).locale('ru').format('DD MMMM YYYY')}</div>
                                                </div>
                                            </div>

                                            <div className="tab-pane fade profile-edit pt-3" id="profile-edit">


                                                <div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="profileImage"
                                                               className="col-md-4 col-lg-3 col-form-label">Фото
                                                            профиля</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <img src={avatarPicture(user.user)}
                                                                 alt="Profile"
                                                                 id="profileImage"/>
                                                            <div className="row">
                                                                <div className="pt-2 col-7 ">
                                                                    <input className="form-control"
                                                                           type="file"
                                                                           name="formFile1"
                                                                           id="formFile1"
                                                                           accept="image/*"
                                                                           multiple
                                                                           onChange={e => setAvatar(e.target.files[0])}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="name"
                                                               className="col-md-4 col-lg-3 col-form-label">Имя
                                                            пользователя</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text"
                                                                   className={errors?.username ? "form-control is-invalid" : "form-control"}
                                                                   id="name" value={username}
                                                                   onChange={e => setUsername(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.username}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="name"
                                                               className="col-md-4 col-lg-3 col-form-label">Имя</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text"
                                                                   className={errors?.name ? "form-control is-invalid" : "form-control"}
                                                                   id="name" value={name}
                                                                   onChange={e => setName(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.name}</div>
                                                        </div>
                                                    </div>
                                                    <div className="row mb-3">
                                                        <label htmlFor="surname"
                                                               className="col-md-4 col-lg-3 col-form-label">Фамилия</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="fullName" type="text"
                                                                   className={errors?.surname ? "form-control is-invalid" : "form-control"}
                                                                   id="surname" value={surname}
                                                                   onChange={e => setSurname(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.surname}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="Email"
                                                               className="col-md-4 col-lg-3 col-form-label">Почта</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="email" type="email"
                                                                   className={errors?.email ? "form-control is-invalid" : "form-control"}
                                                                   id="Email" value={email}
                                                                   onChange={e => setEmail(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.email}</div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        {!formLoading &&
                                                            <button onClick={changeProfile}
                                                                    className="btn btn-primary">Сохранить изменения
                                                            </button>}
                                                        {(formLoading &&
                                                            <button className="btn btn-primary" type="button" disabled>
                                                            <span className="spinner-border spinner-border-sm"
                                                                  role="status" aria-hidden="true"></span>
                                                                Загрузка...
                                                            </button>)}
                                                    </div>
                                                </div>

                                            </div>


                                            <div className="tab-pane fade pt-3" id="profile-change-password">

                                                <div>
                                                    {changePasswordComplete && (<div className="row mb-3 p-1">
                                                        <div className="alert alert-success alert-dismissible fade show"
                                                             role="alert">
                                                            <i className="bi bi-check-circle me-1"></i>
                                                            Пароль успешно сменён
                                                            <button type="button" className="btn-close"
                                                                    data-bs-dismiss="alert" aria-label="Close"></button>
                                                        </div>
                                                    </div>)}

                                                    <div className="row mb-3">
                                                        <label htmlFor="currentPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Текущий
                                                            пароль</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="password" type="password"
                                                                   className={errors?.password ? "form-control is-invalid" : "form-control"}
                                                                   id="currentPassword"
                                                                   onChange={e => setOldPassword(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.password}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="newPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Новый
                                                            пароль</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="newpassword" type="password"
                                                                   className={errors?.newPassword ? "form-control is-invalid" : "form-control"}
                                                                   id="newPassword"
                                                                   onChange={e => setNewPassword(e.target.value)}/>
                                                            <div className="invalid-feedback">{errors?.newPassword}</div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-3">
                                                        <label htmlFor="renewPassword"
                                                               className="col-md-4 col-lg-3 col-form-label">Подтверждение
                                                            пароля</label>
                                                        <div className="col-md-8 col-lg-9">
                                                            <input name="renewpassword" type="password"
                                                                   className={errors?.newPasswordConfirm ? "form-control is-invalid" : "form-control"}
                                                                   id="renewPassword"
                                                                   onChange={e => setNewPasswordConfirm(e.target.value)}/>
                                                            <div
                                                                className="invalid-feedback">{errors?.newPasswordConfirm}</div>
                                                        </div>
                                                    </div>

                                                    <div className="text-center">
                                                        {!formLoading &&
                                                            <button onClick={changePassword}
                                                                    className="btn btn-primary">Сменить пароль
                                                            </button>}
                                                        {(formLoading &&
                                                            <button className="btn btn-primary" type="button" disabled>
                                                            <span className="spinner-border spinner-border-sm"
                                                                  role="status" aria-hidden="true"></span>
                                                                Загрузка...
                                                            </button>)}
                                                    </div>
                                                </div>


                                            </div>

                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>

                </main>

                <Footer/>
                {/*<BackToTop/>*/}
            </div>
        );
    }
)


export default UserProfile;