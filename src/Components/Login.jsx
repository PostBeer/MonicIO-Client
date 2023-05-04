import React, {useContext, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Button, Form, InputGroup, Spinner} from "react-bootstrap";
import logo from "../assets/img/logo.png"
import {login} from "../http/userApi";

const Login = observer(() => {
    const {user} = useContext(Context);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    const signIn = async () => {
        setLoading(true)
        setError()
        await login(username, password).then(response => {
            console.log(response)
                user.setUser(response);
                user.setIsAuth(true);
                navigate('/');
            }
        ).catch(errors => {
            console.log(errors)
            setError(Object.fromEntries(errors.response.data.map(fieldError=>[fieldError.field,fieldError.defaultMessage])))
        }).finally(()=>setLoading(false))
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
                                            <h5 className="card-title text-center pb-0 fs-4">Войдите в свою учетную
                                                запись</h5>
                                            <p className="text-center small">Введите своё имя пользователя и пароль
                                                для входа в систему</p>
                                        </div>
                                        <Form className="row g-3 needs-validation">
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
                                            <Form.Group className="col-12">
                                                <Form.Check type="checkbox" name="remember-me" value="true" label="Остаться
                                                        в системе"
                                                            id="remember-me"/>
                                            </Form.Group>


                                            <Form.Group className="col-12">
                                                {!loading ?
                                                    <Button variant="primary"  className="w-100"
                                                            onClick={signIn}>Войти< /Button>
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
                                                <p className="small mb-0">У вас нет учетной записи? <NavLink
                                                    to="/register">Создайте аккаунт</NavLink></p>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="credits">
                        Разработано <a href="https://github.com/PostBeerTeam">PostBeerTeam</a>
                    </div>
                </section>
            </div>
        </main>


    );
})

export default Login;