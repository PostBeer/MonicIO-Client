import React, {useState} from 'react';
import {Button, Form, InputGroup, Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {getPasswordToken} from "../http/userApi";
import logo from "../assets/img/logo.png";
import ReactLoading from "react-loading";

const Reset = () => {

    const [email, setEmail] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const [alert, setAlert] = useState(false);
    const resetPassword = async () => {
        setLoading(true);
        setError();
        await getPasswordToken(email).then(() => {
            setAlert(true);
        }).catch(errors => {
            setError(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
        }).finally(() => {
            setLoading(false);
        });

    }
    return (
        <main>
            <div className="container">
                <section
                    className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div
                                className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

                                <div className="d-flex justify-content-center py-4">
                                    <a href="/" className="logo d-flex align-items-center w-auto">
                                        <img src={logo} alt="logo"/>
                                        <span className="d-none d-lg-block">MonicIO</span>
                                    </a>
                                </div>
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <div className="pt-4 pb-2">
                                            <h5 className="card-title text-center pb-0 fs-4">Сброс пароля</h5>
                                            <p className="text-center small">Введите адрес вашей электронной почты
                                                для
                                                сброса</p>
                                        </div>
                                        <Form className="row g-3 needs-validation">
                                            {alert &&
                                                <div className="alert alert-success alert-dismissible fade show"
                                                     role="alert">
                                                    <i className="bi bi-check-circle me-1"></i>
                                                    Письмо с ссылкой для смены пароля отправлено на почту
                                                    <button type="button" className="btn-close"
                                                            data-bs-dismiss="alert" aria-label="Close"></button>
                                                </div>}
                                            <Form.Group className="col-12">
                                                <Form.Label>Ваша почта</Form.Label>
                                                <InputGroup className="has-validation">
                                                    <Form.Control
                                                        className={error?.email ? "is-invalid" : ""}
                                                        type="email"
                                                        placeholder="Введите почту"
                                                        aria-describedby="inputGroupPrepend"
                                                        onChange={e => setEmail(e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback className="invalid-feedback">
                                                        {error?.email}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>

                                            <Form.Group className="col-12">
                                                {!loading ?
                                                    <Button variant="primary" className="w-100"
                                                            onClick={resetPassword}>Сбросить пароль</Button>
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
                </section>
            </div>
        </main>
    );
};

export default Reset;