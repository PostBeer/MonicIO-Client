import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {NavLink} from "react-router-dom";
import {Footer} from "./Footer";
import React, {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {
    cancelProjectRequest,
    createProject,
    deleteProject,
    leaveFromProject,
    loadProjects,
    sendProjectRequest
} from "../http/projectApi";
import {observer} from "mobx-react-lite";
import {Button, Form, Spinner} from "react-bootstrap";

export const ProjectList = observer(() => {
        const {user} = useContext(Context)
        const [title, setTitle] = useState();
        const [description, setDescription] = useState();
        const [created, setCreated] = useState(false);
        const {projects} = useContext(Context)
        const [errors, setErrors] = useState({})
        const [loading, setLoading] = useState(false);
        useEffect(() => {
            loadProjects(`${process.env.REACT_APP_SERVER_URL}/api/projects`).then((response) => {
                projects.setProjects(response.data._embedded.projects)
                projects.setLinks(response.data._links)
            })
        }, []);
        const loadMoreProjects = async (url) => {
            await loadProjects(url).then(
                (response) => {
                    projects.setProjects([...projects.projects, response.data._embedded.projects])
                }
            )
        }
        const createNewProject = async () => {
            setLoading(true)
            setErrors({})
            let fieldErrors = {}
            if (!title) {
                fieldErrors = {...fieldErrors, title: "Поле не должно быть пустым"}
            } else if (title.length < 4) {
                fieldErrors = {...fieldErrors, title: "Название проекта не может быть короче трёх символов"}
            }
            if (!description) {
                fieldErrors = {...fieldErrors, description: "Поле не должно быть пустым"}
            }
            if (Object.keys(fieldErrors).length === 0) {
                await createProject(title, description, user.user, "В разработке").then((response) => {
                        setCreated(true)
                        projects.setProjects([...projects.projects, response.data])
                    }
                )
            } else {
                setErrors(fieldErrors)
            }
            setLoading(false)

        }
        const removeProject = async (id) => {
            console.log(id)
            await deleteProject(id).then(() =>
                projects.setProjects(projects.projects.filter((project) => project.id !== id))
            )
        }
        const sendRequest = async (id) => {
            await sendProjectRequest(id).then((response) => {
                    projects.setProjects(projects.projects.filter((project) => project.id !== id))
                    projects.projects.push(response.data)
                    console.log(projects.projects)
                }
            )
        }
        const cancelRequest = async (id) => {
            await cancelProjectRequest(id).then((response) => {
                    projects.setProjects(projects.projects.filter((project) => project.id !== id))
                    projects.projects.push(response.data)
                    console.log(projects.projects)
                }
            )
        }
        const leaveProject = async (id) => {
            await leaveFromProject(id).then((response) => {
                    projects.setProjects(projects.projects.filter((project) => project.id !== id))
                    projects.projects.push(response.data)
                    console.log(projects.projects)
                }
            )
        }


        const showAction = (project) => {
            if (user.user.username === project.creator.username) {
                return <button className="btn btn-sm btn-danger"
                               onClick={() => removeProject(project.id)}> Удалить
                    проект</button>
            } else {
                if (project.users.some((item) => item.username === user.user.username))
                    return <button className="btn btn-sm btn-danger"
                                   onClick={() => leaveProject(project.id)}> Покинуть проект</button>
                else {
                    if (project.requests.some((item) => item.username === user.user.username)) {
                        return <button className="btn btn-sm btn-danger"
                                       onClick={() => cancelRequest(project.id)}>Отменить запрос</button>
                    } else {
                        return <button className="btn btn-sm btn-success"
                                       onClick={() => sendRequest(project.id)}> Подать заявку на вступление</button>
                    }
                }
            }
        }

        const badgeStatus = (status) => {
            switch (status) {
                case "В разработке":
                    return "badge bg-warning"
                case "Заморожен":
                    return "badge bg-secondary"
                case "Завершён":
                    return "badge bg-success"
                default:
                    return "badge bg-warning"
            }
        }
        return (
            <div>
                <Header/>
                <SideBar/>
                <main id="main" className="main">

                    <div className="pagetitle">
                        <h1>Проекты</h1>
                        <nav>
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><NavLink to="/">Главная</NavLink></li>
                                <li className="breadcrumb-item">Проекты</li>
                            </ol>
                        </nav>
                    </div>

                    <section className="section dashboard">
                        <div className="row">


                            <div className="col-lg-12 justify-content-center">
                                <div className="row justify-content-center">


                                    <div className="col-12 justify-content-center">
                                        <div className="card top-selling overflow-auto">


                                            <div className="card-body pb-0" style={{minHeight: '400px'}}>
                                                <h5 className="card-title">Список разрабатывающихся проектов</h5>

                                                <table key={projects} className="table table-borderless text-center"
                                                >
                                                    <thead>
                                                    <tr>
                                                        <th scope="col">Проект</th>
                                                        <th scope="col">Руководитель</th>
                                                        <th scope="col">Статус</th>
                                                        <th scope="col">Действия</th>
                                                    </tr>

                                                    </thead>
                                                    {projects.projects.length === 0 ?
                                                        <tbody>
                                                        <tr className="table-warning text-center">
                                                            <th colSpan={5} scope="row">Проекты отсутствуют</th>
                                                        </tr>
                                                        </tbody>
                                                        :
                                                        <tbody>
                                                        {projects.projects.map((project) => {
                                                            return <tr key={project.id}>
                                                                <td><NavLink to={`/projects/${project.id}`}
                                                                             className="text-primary">{project.title}</NavLink>
                                                                </td>
                                                                <td>{`${project.creator.surname} ${project.creator.name[0]}.`} </td>
                                                                <td><span
                                                                    className={badgeStatus(project.status)}>{project.status}</span>
                                                                </td>
                                                                <td>{showAction(project)} </td>
                                                            </tr>
                                                        })}
                                                        {projects.links.next && <tr className="text-center">
                                                            <td colSpan="5">
                                                                <button type="button" className="btn btn-dark rounded-pill"
                                                                        onClick={() => loadMoreProjects(projects.links.next)}>
                                                                    <i
                                                                        className="bi bi-three-dots"></i></button>
                                                            </td>
                                                        </tr>}

                                                        </tbody>
                                                    }
                                                </table>

                                            </div>

                                        </div>
                                        {user.isPM &&
                                            <div className="card top-selling overflow-auto">
                                                <div className="card-body">
                                                    <h5 className="card-title">Создать новый проект</h5>
                                                    {created &&
                                                        <div className="alert alert-success alert-dismissible fade show"
                                                             role="alert">
                                                            Новый проект успешно создан
                                                            <button type="button" className="btn-close"
                                                                    data-bs-dismiss="alert" aria-label="Close"></button>
                                                        </div>}
                                                    <div className="row g-3 needs-validation">
                                                        <div className="col-md-12">
                                                            <div className="form-floating has-validation"
                                                                 key={errors}>
                                                                <input type="text"
                                                                       className={errors?.title ? "form-control is-invalid" : "form-control"}
                                                                       id="floatingName"
                                                                       onChange={e => setTitle(e.target.value)}
                                                                       placeholder="Введите название нового проекта"/>
                                                                <label htmlFor="floatingName">Название проекта</label>
                                                                <Form.Control.Feedback className="invalid-feedback">
                                                                    {errors?.title}
                                                                </Form.Control.Feedback>
                                                            </div>

                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                    <textarea
                                                        className={errors?.description ? "form-control is-invalid" : "form-control"}
                                                        placeholder="Address"
                                                        id="floatingTextarea"
                                                        onChange={e => setDescription(e.target.value)}
                                                        style={{height: "100px"}}></textarea>
                                                                <label htmlFor="floatingTextarea">Описание проекта</label>
                                                                <Form.Control.Feedback className="invalid-feedback">
                                                                    {errors?.description}
                                                                </Form.Control.Feedback>
                                                            </div>

                                                        </div>
                                                        <div className="text-center">
                                                            {loading ?
                                                                <Button variant="primary" disabled>
                                                                    <Spinner
                                                                        as="span"
                                                                        animation="border"
                                                                        size="sm"
                                                                        role="status"
                                                                        aria-hidden="true"
                                                                    />
                                                                    Загрузка...
                                                                </Button>
                                                                :
                                                                <button className="btn btn-primary"
                                                                        onClick={createNewProject}>Создать
                                                                    новый проект
                                                                </button>
                                                            }


                                                        </div>

                                                    </div>

                                                </div>
                                            </div>}
                                    </div>


                                </div>
                            </div>


                        </div>
                    </section>

                </main>
                <Footer/>
            </div>
        );
    })
;