import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";


export const Home = () => {


    return (
        <div>
            <Header/>
            <SideBar/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Мониторинг проектов</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="index.html">Главная</NavLink></li>
                            <li className="breadcrumb-item active">Мониторинг проектов</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">


                        <div className="col-lg-8">
                            <div className="row">


                                <div className="col-12">
                                    <div className="card recent-sales overflow-auto">


                                        <div className="card-body">
                                            <h5 className="card-title">Статус проектов</h5>

                                            <table className="table table-borderless">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Проект</th>
                                                    <th scope="col">Кол-во задач</th>
                                                    <th scope="col">Статус</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">#1</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Курсач</NavLink></td>
                                                    <td>8</td>
                                                    <td><span className="badge bg-warning">В разработке</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">#2</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Диплом</NavLink></td>
                                                    <td>15</td>
                                                    <td><span className="badge bg-warning">В разработке</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">#3</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Секретный
                                                        проект</NavLink></td>
                                                    <td>5</td>
                                                    <td><span className="badge bg-success">Завершён</span></td>
                                                </tr>
                                                </tbody>
                                            </table>

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
                                                    <th scope="row"><NavLink to="#">Реализовать регистрацию</NavLink>
                                                    </th>
                                                    <td><NavLink to="#" className="text-primary">Курсач</NavLink></td>
                                                    <td>Милько М.</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-warning">Выполняется</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">Сделать титульник</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Диплом</NavLink></td>
                                                    <td>Жизневский Н.</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-success">Ожидает подтверждения</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">Взломать Пентагон</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Секретный
                                                        проект</NavLink></td>
                                                    <td>Звягинцев М.</td>
                                                    <td>20-04-2023</td>
                                                    <td><span className="badge bg-secondary">Отложена</span></td>
                                                </tr>
                                                <tr>
                                                    <th scope="row"><NavLink to="#">Сделать макет сайта</NavLink></th>
                                                    <td><NavLink to="#" className="text-primary">Секретный
                                                        проект</NavLink></td>
                                                    <td>Глушко Н.С.</td>
                                                    <td>10-04-2023</td>
                                                    <td><span className="badge bg-danger">Просрочена</span></td>
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
                                                Quia quae rerum <NavLink to="#" className="fw-bold text-dark">explicabo
                                                officiis</NavLink> beatae
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
                                                Tempore autem saepe <NavLink to="#" className="fw-bold text-dark">occaecati
                                                voluptatem</NavLink>
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
                                <div className="filter">
                                    <NavLink className="icon" to="#" data-bs-toggle="dropdown"><i
                                        className="bi bi-three-dots"></i></NavLink>
                                    <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
                                        <li className="dropdown-header text-start">
                                            <h6>Filter</h6>
                                        </li>

                                        <li><NavLink className="dropdown-item" to="#">Today</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">This Month</NavLink></li>
                                        <li><NavLink className="dropdown-item" to="#">This Year</NavLink></li>
                                    </ul>
                                </div>

                                <div className="card-body pb-0">
                                    <h5 className="card-title">Процент активности по
                                        проектам <span>| За всё время</span></h5>


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