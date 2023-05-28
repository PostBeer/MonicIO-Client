import React, {useEffect, useState} from 'react';
import logo from '../assets/img/not-found.svg';
import logoM from "../assets/img/logo.png";
import {checkPasswordToken, executePasswordToken} from "../http/userApi";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import ReactLoading from "react-loading";
import {Button, Form, InputGroup, Spinner} from "react-bootstrap";

const Forget = () => {

    const [success, setSuccess] = useState(false);
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [error, setError] = useState();
    const {token} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
            checkPasswordToken(token).then((response) => {
                console.log(response);
                if (response.status === 200) {
                    setSuccess(true);
                } else {
                    setSuccess(false);
                }
            }).finally(() => {
                setLoading(false);
            })
        }, 1000)
    }, []);

    const changePassword = async () => {
        setError();
        await executePasswordToken(password, passwordConfirm, token).then(() => {
            navigate('/login');
        }).catch(errors => {
            setError(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
        });
    }


    if (loading) {
        return (<div className={"d-flex min-vh-100 align-items-center justify-content-center"}><ReactLoading
            className={"col-md-8 mx-auto h-100"} type={"bubbles"} color={"blue"} height={'20vh'}
            width={'20vh'}></ReactLoading></div>)
    } else
        return (
            <main>
                <div className="container">
                    <section
                        className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                        {success &&
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div
                                        className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                        <div className="d-flex justify-content-center py-4">
                                            <a href="/" className="logo d-flex align-items-center w-auto">
                                                <img src={logoM} alt="logo"/>
                                                <span className="d-none d-lg-block">MonicIO</span>
                                            </a>
                                        </div>
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="pt-4 pb-2">
                                                    <h5 className="card-title text-center pb-0 fs-4">Восстановление</h5>
                                                    <p className="text-center small">Введите новый пароль от учетной
                                                        записи</p>
                                                </div>
                                                <Form className="row g-3 needs-validation">
                                                    <Form.Group className="col-12 ">
                                                        <Form.Label>Пароль</Form.Label>
                                                        <InputGroup className="has-validation">
                                                            <Form.Control
                                                                className={error?.password ? "is-invalid" : ""}
                                                                type="password"
                                                                placeholder="Введите пароль"
                                                                aria-describedby="inputGroupPrepend"
                                                                onChange={e => setPassword(e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback className="invalid-feedback">
                                                                {error?.password}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>

                                                    </Form.Group>
                                                    <Form.Group className="col-12 ">
                                                        <Form.Label>Подтверждение пароля</Form.Label>
                                                        <InputGroup className="has-validation">
                                                            <Form.Control
                                                                className={error?.passwordConfirm ? "is-invalid" : ""}
                                                                type="password"
                                                                placeholder="Введите пароль повторно"
                                                                aria-describedby="inputGroupPrepend"
                                                                onChange={e => setPasswordConfirm(e.target.value)}
                                                                required
                                                            />
                                                            <Form.Control.Feedback className="invalid-feedback">
                                                                {error?.passwordConfirm}
                                                            </Form.Control.Feedback>
                                                        </InputGroup>

                                                    </Form.Group>
                                                    <Form.Group className="col-12">
                                                        {!loading ?
                                                            <Button variant="primary" className="w-100"
                                                                    onClick={changePassword}>Сменить пароль</Button>
                                                            : <Button variant="primary" className="w-100" disabled>
                                                                <Spinner
                                                                    as="span"
                                                                    animation="border"
                                                                    size="sm"
                                                                    role="status"
                                                                    aria-hidden="true"
                                                                />
                                                                Загрузка...
                                                            </Button>}
                                                    </Form.Group>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        {!success &&
                            <div className="container">
                                <section
                                    className="section error-404 min-vh-100 d-flex flex-column align-items-center justify-content-center">
                                    <h3>Токен не действителен</h3>
                                    <NavLink to='/reset' className="btn">Сбросить пароль</NavLink>
                                    <img src={logo} className="img-fluid py-5" alt="Reset"/>
                                    <div className="credits">
                                        Разработано <a target='_blank'
                                                       href="https://github.com/PostBeer">PostBeerTeam</a>
                                    </div>
                                </section>
                            </div>
                        }

                    </section>
                </div>
            </main>
        );
};

export default Forget;