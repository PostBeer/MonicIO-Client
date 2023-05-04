import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {avatarPicture} from "../App";
import {useContext} from "react";
import {Context} from "../index";
import {NavLink} from "react-router-dom";

export const Project = () => {
    const {user} = useContext(Context)

    return (
        <div>
            <Header/>
            <SideBar/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Проект "Курсач"</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Главная</NavLink></li>
                            <li className="breadcrumb-item">Проекты</li>
                            <li className="breadcrumb-item active">Курсач</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">


                        <div className="col-lg-8">
                            <div className="row">


                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Курсач</h5>
                                            Ut in ea error laudantium quas omnis officia. Sit sed praesentium voluptas.
                                            Corrupti
                                            inventore consequatur nisi necessitatibus modi consequuntur soluta id. Enim
                                            autem est
                                            esse natus assumenda. Non sunt dignissimos officiis expedita. Consequatur
                                            sint
                                            repellendus voluptas.
                                            Quidem sit est nulla ullam. Suscipit debitis ullam iusto dolorem animi
                                            dolorem numquam.
                                            Enim fuga ipsum dolor nulla quia ut.
                                            Rerum dolor voluptatem et deleniti libero totam numquam nobis distinctio.
                                            Sit sint aut.
                                            Consequatur rerum in.(пример описания)
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">


                                        <div className="card-body pb-0">
                                            <h5 className="card-title">Статус задач</h5>

                                            <table className="table table-borderless">
                                                <thead>
                                                <tr>
                                                    <th scope="col">Задача</th>
                                                    <th scope="col">Проект</th>
                                                    <th scope="col">Исполнитель</th>
                                                    <th scope="col">Завершить до</th>
                                                    <th scope="col">Статус</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row"><a href="#">Реализовать регистрацию</a></th>
                                                    <td><a href="#" className="text-primary">Курсач</a></td>
                                                    <td>Милько М.</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-warning">Выполняется</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#">Написать документацию</a></th>
                                                    <td><a href="#" className="text-primary">Курсач</a></td>
                                                    <td>Жизневский Н.</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-warning">Выполняется</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#">Сделать отчёт</a></th>
                                                    <td><a href="#" className="text-primary">Курсач</a></td>
                                                    <td>-</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-primary">Назначение исполнителя</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><a href="#">Инициализация сервера</a></th>
                                                    <td><a href="#" className="text-primary">Курсач</a></td>
                                                    <td>Глушко Н.С.</td>
                                                    <td>10-04-2023</td>
                                                    <td><span className="badge bg-success">Ожидает подтверждения</span>
                                                    </td>
                                                </tr>
                                                <tr className="text-center">
                                                    <td colSpan="5">
                                                        <button type="button" className="btn btn-dark rounded-pill"><i
                                                            className="bi bi-three-dots"></i></button>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>

                                        </div>

                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Сотрудники, учавствующие в разработке
                                                проекта</h5>


                                            <table className="table table-dark">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Имя</th>
                                                    <th scope="col">Должность</th>
                                                    <th scope="col">Количество задач</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td>Глушко Никита</td>
                                                    <td>Разработчик</td>
                                                    <td>28</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td>Звягинцев Максим</td>
                                                    <td>Разработчик</td>
                                                    <td>35</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td>Милько Максим</td>
                                                    <td>Разработчик</td>
                                                    <td>45</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td>Жизневский Никита</td>
                                                    <td>Разработчик</td>
                                                    <td>34</td>
                                                </tr>
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4">


                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">Недавняя активность <span>| За всё время</span></h5>

                                    <div className="activity">

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">32 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                            <div className="activity-content">
                                                Quia quae rerum <a href="#" className="fw-bold text-dark">explicabo
                                                officiis</a> beatae
                                            </div>
                                        </div>

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">56 min</div>
                                            <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                            <div className="activity-content">
                                                Voluptatem blanditiis blanditiis eveniet
                                            </div>
                                        </div>

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 hrs</div>
                                            <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                            <div className="activity-content">
                                                Voluptates corrupti molestias voluptatem
                                            </div>
                                        </div>

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">1 day</div>
                                            <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                            <div className="activity-content">
                                                Tempore autem saepe <a href="#" className="fw-bold text-dark">occaecati
                                                voluptatem</a>
                                                tempore
                                            </div>
                                        </div>

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">2 days</div>
                                            <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                            <div className="activity-content">
                                                Est sit eum reiciendis exercitationem
                                            </div>
                                        </div>

                                        <div className="activity-item d-flex">
                                            <div className="activite-label">4 weeks</div>
                                            <i className='bi bi-circle-fill activity-badge text-muted align-self-start'></i>
                                            <div className="activity-content">
                                                Dicta dolorem harum nulla eius. Ut quidem quidem sit quas
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>


                            <div className="card">

                                <div className="card-body pb-2">
                                    <h5 className="card-title">Чат проекта "Курсач"</h5>

                                    <div id="chatRoom" className="pt-3 pe-1"
                                         style={{display: 'block', position: 'relative', height: '300px', overflowY: 'auto'}}></div>
                                    <div id="chatInputArea"
                                         className="text-muted justify-content-start align-items-center pt-3 mt-2  d-flex"
                                         style={{display: 'block'}}>
                                        <img src={avatarPicture(user)} alt="avatar 3"
                                             style={{width: '40px', height: '100%'}} className="rounded-circle"/>
                                        <input type="text" className="ms-3 form-control form-control-lg"
                                               id="exampleFormControlInput2"
                                               placeholder="Type message"/>
                                        <NavLink id="sendButton" className="ms-2"
                                        ><i
                                            className="fas fa-paper-plane"></i></NavLink>
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