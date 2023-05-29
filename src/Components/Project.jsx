import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {avatarPicture} from "../App";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {NavLink, useParams} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {createTask, loadTasks} from "../http/taskApi";
import dayjs from "dayjs";
import {completeProjectRequest, loadProject, loadTasksLogForProject} from "../http/projectApi";

require('dayjs/locale/es')
var relativeTime = require('dayjs/plugin/relativeTime')
dayjs.extend(relativeTime)

export const Project = observer((props) => {
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const [tasks, setTasks] = useState([]);
    const [logs, setLogs] = useState([]);
    const [links, setLinks] = useState();
    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [completeDate, setCompleteDate] = useState();
    const {id} = useParams()

    useEffect(() => {
        loadProject(id).then((response) => {
            projects.setCurrentProject(response.data)
            loadTasks(response.data._links.tasks.href).then(response => {
                setTasks(response.data._embedded.tasks)
                setLinks(response.data._links)
            })
        })

        loadTasksLogForProject(id).then((response) => {
            setLogs(response.data.content);
        })
    });
    console.log(JSON.stringify(projects.currentProject.users))

    const completeRequest = async (username, success) => {
        await completeProjectRequest(id, username, success).then((response) => {
            projects.setCurrentProject(response.data)
        })
    }

    const chooseStatus = (status) => {
        switch (status) {
            case "Назначение исполнителя":
                return "badge bg-info"
            case "Выполняется":
                return "badge bg-primary"
            case "Отправлена на проверку":
                return "badge bg-warning"
            case "Просрочена":
                return "badge bg-danger"
            case "Выполнена":
                return "badge bg-success"
        }
    }
    const createNewTask = async () => {
        await createTask(name, description, completeDate, projects.currentProject.id).then((response) => {
            setTasks(prevState => [...prevState, response.data])
        }).catch((errors => {
            console.log(errors)
        }))
    }
    return (
        <div>
            <Header/>
            <SideBar/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Проект "{projects.currentProject.title}"</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink to="/">Главная</NavLink></li>
                            <li className="breadcrumb-item">Проекты</li>
                            <li className="breadcrumb-item active">{projects.currentProject.title}</li>
                        </ol>
                    </nav>
                </div>

                <section className="section dashboard">
                    <div className="row">


                        <div className="col-lg-8">
                            <div className="row">


                                <div className="col-12">
                                    <div className="card">
                                        <div className="filter">
                                            {projects.currentProject.status === "Завершён" ?
                                                <button
                                                    className="btn btn-sm me-3 btn-success"
                                                    style={{color: "white"}}>{projects.currentProject.status}</button>
                                                :
                                                <button
                                                    className="btn btn-sm me-3 btn-warning"
                                                    style={{color: "white"}}>{projects.currentProject.status}</button>
                                            }
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">{projects.currentProject.title}</h5>
                                            {projects.currentProject.description}
                                        </div>
                                    </div>
                                </div>


                                <div className="col-12">
                                    <div className="card top-selling overflow-auto">


                                        <div className="card-body pb-0">
                                            <h5 className="card-title">Статус задач</h5>

                                            <table className="table table-borderless">
                                                <thead className="text-center">
                                                <tr>
                                                    <th scope="col">Задача</th>
                                                    <th scope="col">Исполнитель</th>
                                                    <th scope="col">Завершить до</th>
                                                    <th scope="col">Статус</th>
                                                    <th scope="col">Действия</th>
                                                </tr>
                                                </thead>
                                                {tasks.length !== 0 ?
                                                    <tbody className="text-center">
                                                    {tasks.map((task, index) => {
                                                        return <tr>

                                                            <th scope="row"><a href="#">{task.name}</a></th>
                                                            {task.implementer ?
                                                                <td>{task.implementer.surname} {task.implementer.name[0]}.</td>
                                                                :
                                                                <td>Не выбран</td>
                                                            }
                                                            <td>{dayjs(task.completeDate).format('DD.MM.YYYY HH:mm')}</td>
                                                            <td><span
                                                                className={chooseStatus(task.status)}>{task.status}</span>
                                                            </td>
                                                            <td className="text-center">
                                                                {user.user.username === projects.currentProject.creator.username ?
                                                                    <button type="button"
                                                                            className="btn btn-sm btn-danger"><i
                                                                        className="bi bi-trash"></i></button>
                                                                    :
                                                                    <button type="button"
                                                                            className="btn btn-sm btn-success"><i
                                                                        className="bi bi-check"></i></button>
                                                                }

                                                            </td>
                                                        </tr>
                                                    })}
                                                    {links.next && <tr className="text-center">
                                                        <td colSpan="5">
                                                            <button type="button" className="btn btn-dark rounded-pill">
                                                                <i
                                                                    className="bi bi-three-dots"></i></button>
                                                        </td>
                                                    </tr>}
                                                    </tbody>

                                                    :
                                                    <tbody>
                                                    <tr className="table-warning text-center">
                                                        <th colSpan={5} scope="row">Задачи отсутствуют</th>
                                                    </tr>

                                                    </tbody>
                                                }
                                            </table>

                                        </div>

                                    </div>
                                </div>
                                {user.isPM && <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Создать новую задачу</h5>

                                            <div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputText"
                                                           className="col-sm-2 col-form-label">Название</label>
                                                    <div className="col-sm-10">
                                                        <input type="text"
                                                               placeholder="Введите название задачи"
                                                               onChange={e => setName(e.target.value)}
                                                               className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputPassword"
                                                           className="col-sm-2 col-form-label">Описание</label>
                                                    <div className="col-sm-10">
                                                        <textarea className="form-control"
                                                                  placeholder="Введите описание задачи"
                                                                  onChange={e => setDescription(e.target.value)}
                                                                  style={{height: "100px"}}></textarea>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label htmlFor="inputDate"
                                                           className="col-sm-2 col-form-label">Выполнить до</label>
                                                    <div className="col-sm-10">
                                                        <input type="datetime-local" className="form-control"
                                                               onChange={e => setCompleteDate(e.target.value)}
                                                               placeholder="Выполнить до"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <div className="col-sm-12 text-center">
                                                        <button className="btn btn-success"
                                                                onClick={createNewTask}>Создать задачу
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                </div>}

                                <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Сотрудники, учавствующие в разработке
                                                проекта</h5>


                                            <table className="table table-dark text-center">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Никнейм</th>
                                                    <th scope="col">Имя</th>
                                                    <th scope="col">Должность</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {projects.currentProject?.users?.map((user, index) => {
                                                    return <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {user.username}</td>
                                                        <td>{user.surname} {user.name}</td>
                                                        <td>{user.username === projects.currentProject.creator.username ?
                                                            "Руководитель проекта"
                                                            :
                                                            "Участник"
                                                        }</td>
                                                    </tr>
                                                })}
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>
                                {user.isPM && <div className="col-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5 className="card-title">Заявки на вступление в проект</h5>


                                            <table className="table table-dark text-center">
                                                <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Никнейм</th>
                                                    <th scope="col">Имя</th>
                                                    <th scope="col">Действия</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {projects.currentProject?.requests?.map((user, index) => {
                                                    return <tr>
                                                        <th scope="row">{index + 1}</th>
                                                        <td> {user.username}</td>
                                                        <td>{user.surname} {user.name}</td>
                                                        <td>
                                                            <button type="button"
                                                                    className="btn btn-sm btn-danger me-2"><i
                                                                className="bi bi-x-lg"
                                                                onClick={() => completeRequest(user.username, false)}></i>
                                                            </button>
                                                            <button type="button"
                                                                    className="btn btn-sm btn-success ms-2"><i
                                                                className="bi bi-check-lg"
                                                                onClick={() => completeRequest(user.username, true)}></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                })}
                                                </tbody>
                                            </table>


                                        </div>
                                    </div>
                                </div>}


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
                                                            <div className="activite-label" style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-info align-self-start'></i>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Выполняется":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label" style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-primary align-self-start'></i>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Отправлена на проверку":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label" style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-warning align-self-start'></i>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Просрочена":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label" style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-danger align-self-start'></i>
                                                            <div className="activity-content">
                                                                <a className="fw-bold text-dark">{log.taskName}</a> - {log.status}
                                                            </div>
                                                        </div>

                                                    case "Выполнена":
                                                        return <div className="activity-item d-flex">
                                                            <div className="activite-label" style={{width: "100px"}}>{dayjs(log.changedOn).fromNow()}</div>
                                                            <i className='bi bi-circle-fill activity-badge text-success align-self-start'></i>
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


                            <div className="card">

                                <div className="card-body pb-2">
                                    <h5 className="card-title">Чат проекта "Курсач"</h5>

                                    <div id="chatRoom" className="pt-3 pe-1"
                                         style={{
                                             display: 'block',
                                             position: 'relative',
                                             height: '300px',
                                             overflowY: 'auto'
                                         }}></div>
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
});