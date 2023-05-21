import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {registration} from "../http/userApi";
import logo from "../assets/img/logo.png";
import {Button, Form, InputGroup, Row, Spinner} from "react-bootstrap";

const Register = () => {

    const [username, setUsername] = useState();
    const [name, setName] = useState();
    const [surname, setSurname] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();
    const [error, setError] = useState()
    const [loading, setLoading] = useState();
    const [checked, setChecked] = useState(false);
    const [role, setRole] = useState('USER');
    const signUp = async () => {
        setError()
        await registration(username, name, surname, email, role, password, passwordConfirm)
            .catch(errors => {
                setError(Object.fromEntries(errors.response.data.map(fieldError => [fieldError.field, fieldError.defaultMessage])))
            }).finally(() => setLoading(false))
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
                                            <h5 className="card-title text-center pb-0 fs-4">Создайте аккаунт</h5>
                                            <p className="text-center small">Введите свои личные данные для создания
                                                учетной записи</p>
                                        </div>
                                        <Form className="row g-3 needs-validation">
                                            <Form.Label>Ваша должность</Form.Label>
                                            <Row className="align-items-center justify-content-around mx-auto">
                                                <Form.Group className="col-6">
                                                    <Form.Check type="radio" name="remember-me" value="true"
                                                                label="Разработчик"
                                                                defaultChecked={true}
                                                                onChange={() => setRole('USER')}/>
                                                </Form.Group>
                                                <Form.Group className="col-6">
                                                    <Form.Check type="radio" name="remember-me" value="true"
                                                                label="Руководитель"
                                                                onChange={() => setRole('PROJECT_MANAGER')}/>
                                                </Form.Group>
                                            </Row>


                                            <Form.Group className="col-12">
                                                <Form.Label>Ваше имя</Form.Label>
                                                <InputGroup className="has-validation">

                                                    <Form.Control
                                                        className={error?.name ? "is-invalid" : ""}
                                                        type="text"
                                                        placeholder="Введите имя пользователя"
                                                        aria-describedby="inputGroupPrepend"
                                                        onChange={e => setName(e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback className="invalid-feedback">
                                                        {error?.name}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="col-12">
                                                <Form.Label>Ваша фамилия</Form.Label>
                                                <InputGroup className="has-validation">
                                                    <Form.Control
                                                        className={error?.surname ? "is-invalid" : ""}
                                                        type="text"
                                                        placeholder="Введите имя пользователя"
                                                        aria-describedby="inputGroupPrepend"
                                                        onChange={e => setSurname(e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback className="invalid-feedback">
                                                        {error?.surname}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group className="col-12">
                                                <Form.Label>Ваша почта</Form.Label>
                                                <InputGroup className="has-validation">
                                                    <Form.Control
                                                        className={error?.username ? "is-invalid" : ""}
                                                        type="email"
                                                        placeholder="Введите имя пользователя"
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
                                                <Form.Label>Имя пользователя</Form.Label>
                                                <InputGroup className="has-validation">
                                                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                                    <Form.Control
                                                        className={error?.username ? "is-invalid" : ""}
                                                        type="text"
                                                        placeholder="Введите имя пользователя"
                                                        aria-describedby="inputGroupPrepend"
                                                        onChange={e => setUsername(e.target.value)}
                                                        required
                                                    />
                                                    <Form.Control.Feedback className="invalid-feedback">
                                                        {error?.username}
                                                    </Form.Control.Feedback>
                                                </InputGroup>
                                            </Form.Group>
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
                                                <Form.Check type="checkbox" name="remember-me" value="true"
                                                            label={<>Я соглашаюсь c
                                                                {' '}
                                                                <NavLink
                                                                    to='https://github.com/PostBeerTeam'> условиями и
                                                                    положениями компании</NavLink></>}
                                                            id="remember-me"
                                                            onChange={(e) => setChecked(e.target.checked)}/>
                                            </Form.Group>

                                            <Form.Group className="col-12">
                                                {!loading ?
                                                    <Button variant="primary" className="w-100"
                                                            onClick={signUp} disabled={!checked}>Создать
                                                        аккаунт</Button>
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
                                            <Form.Group className="col-12">
                                                <p className="small mb-0">Уже есть аккаунт? <NavLink
                                                    to="/login">Войдите</NavLink></p>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="credits">
                        Разработано <NavLink to="https://github.com/PostBeerTeam">PostBeerTeam</NavLink>
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Register;