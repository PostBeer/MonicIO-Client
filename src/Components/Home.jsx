import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";
import {loadProjectsStatuses, loadTasksLogForUser, loadTasksStatuses} from "../http/projectApi";
import {observer} from "mobx-react-lite";
import dayjs from "dayjs";


export const Home = observer((props) => {
    const [logs, setLogs] = useState([]);
    const [projectsStatuses, setProjectStatuses] = useState([]);
    const [tasksStatuses, setTaskStatuses] = useState([]);

    useEffect(() => {
        loadTasksLogForUser().then((response) => {
            setLogs(response.data.content);
        })

        loadProjectsStatuses().then((response) => {
            setProjectStatuses(response.data.content);
        })

        loadTasksStatuses().then((response) => {
            setTaskStatuses(response.data.content);
        })
    })

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

                                            {projectsStatuses !== 0 ?
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

                                                    {projectsStatuses.map((project, index) => {
                                                        switch (project.status) {
                                                            case "В разработке":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">#{project.id}</NavLink></th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{project.title}</NavLink>
                                                                    </td>
                                                                    <td>8</td>
                                                                    <td><span
                                                                        className="badge bg-warning">{project.status}</span>
                                                                    </td>
                                                                </tr>

                                                            case "Завершён":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">#{project.id}</NavLink></th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{project.title}</NavLink>
                                                                    </td>
                                                                    <td>8</td>
                                                                    <td><span
                                                                        className="badge bg-success">{project.status}</span>
                                                                    </td>
                                                                </tr>
                                                        }
                                                    })}
                                                    </tbody>
                                                </table>
                                                :
                                                <div>
                                                    Нет закрепленных проектов.
                                                </div>
                                            }

                                        </div>

                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">


                                        <div className="card-body pb-0">
                                            <h5 className="card-title">Статус задач</h5>

                                            {tasksStatuses !== 0 ?
                                                <table className="table table-borderless">
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Задача</th>
                                                        <th scope="col">Описание</th>
                                                        <th scope="col">Завершить до</th>
                                                        <th scope="col">Статус</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    {tasksStatuses.map((task, index) => {
                                                        switch (task.status) {
                                                            case "Назначение исполнителя":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">{task.name}</NavLink>
                                                                    </th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{task.description}</NavLink>
                                                                    </td>
                                                                    <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                                    <td><span
                                                                        className="badge bg-info">{task.status}</span>
                                                                    </td>
                                                                </tr>

                                                            case "Выполняется":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">{task.name}</NavLink>
                                                                    </th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{task.description}</NavLink>
                                                                    </td>
                                                                    <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                                    <td><span
                                                                        className="badge bg-primary">{task.status}</span>
                                                                    </td>
                                                                </tr>

                                                            case "Отправлена на проверку":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">{task.name}</NavLink>
                                                                    </th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{task.description}</NavLink>
                                                                    </td>
                                                                    <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                                    <td><span
                                                                        className="badge bg-warning">{task.status}</span>
                                                                    </td>
                                                                </tr>

                                                            case "Просрочена":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">{task.name}</NavLink>
                                                                    </th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{task.description}</NavLink>
                                                                    </td>
                                                                    <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                                    <td><span
                                                                        className="badge bg-danger">{task.status}</span>
                                                                    </td>
                                                                </tr>

                                                            case "Выполнена":
                                                                return <tr>
                                                                    <th scope="row"><NavLink
                                                                        to="#">{task.name}</NavLink>
                                                                    </th>
                                                                    <td><NavLink to="#"
                                                                                 className="text-primary">{task.description}</NavLink>
                                                                    </td>
                                                                    <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                                    <td><span
                                                                        className="badge bg-success">{task.status}</span>
                                                                    </td>
                                                                </tr>
                                                        }
                                                    })}
                                                    </tbody>
                                                </table>
                                                :
                                                <div>
                                                    Нет закрепленных задач.
                                                </div>
                                            }
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="col-lg-4">


                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">Недавняя активность <span>| За всё время</span></h5>

                                    {logs.length !== 0 ?
                                        <div className="activity">

                                            {logs.map((log, index) => {
                                                switch (log.status) {
                                                    case "Назначение исполнителя":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label"
                                                                 style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                                            <div className="activity-content fw-bold text-dark">
                                                                {log.projectName}
                                                            </div>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Выполняется":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label"
                                                                 style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                                            <div className="activity-content fw-bold text-dark">
                                                                {log.projectName}
                                                            </div>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Отправлена на проверку":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label"
                                                                 style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                                            <div className="activity-content fw-bold text-dark">
                                                                {log.projectName}
                                                            </div>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Просрочена":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label"
                                                                 style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                                            <div className="activity-content fw-bold text-dark">
                                                                {log.projectName}
                                                            </div>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Выполнена":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label"
                                                                 style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
                                                            <div className="activity-content fw-bold text-dark">
                                                                {log.projectName}
                                                            </div>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>
                                                }
                                            })}
                                        </div>
                                        :
                                        <div>
                                            Нет недавней активности.
                                        </div>
                                    }

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    );
});