import {NavLink, useLocation} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import {Context} from "../index";
import {loadProjects} from "../http/projectApi";
import {observer} from "mobx-react-lite";

export const SideBar = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context)
    const {projects} = useContext(Context)


    const [myProjects, setMyProjects] = useState([]);
    useEffect(() => {
        loadProjects(process.env.REACT_APP_SERVER_URL + `/api/users/${user.user.id}/projects`).then((response) => {
            setMyProjects(response.data._embedded.projects)
        })
    }, []);
    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">
                <li className="nav-heading">Страницы</li>
                <li className="nav-item">
                    <NavLink className={location.pathname === '/home' ? 'nav-link' : 'nav-link collapsed'} to="/home">
                        <i className="bi bi-grid"></i>
                        <span>Мониторинг проектов</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={location.pathname === '/projects' ? 'nav-link' : 'nav-link collapsed'}
                             to="/projects">
                        <i className="bi bi-journal-code"></i>
                        <span>Проекты</span>
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse"
                             to="/projects">
                        <i className="bi bi-menu-button-wide"></i><span>Мои проекты</span><i
                        className="bi bi-chevron-down ms-auto"></i>
                    </NavLink>
                    {myProjects.length !== 0 ?
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            {myProjects.map((project) => {
                                return <li>
                                    <NavLink to={`/projects/${project.id}`}>
                                        <i className="bi bi-circle"></i><span>{project.title}</span>
                                    </NavLink>
                                </li>
                            })}


                        </ul>
                        :
                        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <NavLink to="components-alerts.html">
                                    <i className="bi bi-circle"></i><span>У вас нет проектов</span>
                                </NavLink>
                            </li>

                        </ul>
                    }


                </li>
                {user.isPM && < li className="nav-item">
                    <NavLink className={location.pathname === '/team' ? 'nav-link' : 'nav-link collapsed'}
                             to="/profile">
                        <i className="bi bi-people"></i>
                        <span>Сотрудники</span>
                    </NavLink>
                </li>}
                <li className="nav-item">
                    <NavLink className={location.pathname === '/tasks' ? 'nav-link' : 'nav-link collapsed'} to="/home">
                        <i className="bi bi-clipboard-check"></i>
                        <span>Мои задачи</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={location.pathname === '/profile' ? 'nav-link' : 'nav-link collapsed'}
                             to="/profile">
                        <i className="bi bi-person"></i>
                        <span>Профиль</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={location.pathname === '/faq' ? 'nav-link' : 'nav-link collapsed'}
                             to="/faq">
                        <i className="bi bi-question-circle"></i>
                        <span>F.A.Q</span>
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className={location.pathname === '/contact' ? 'nav-link' : 'nav-link collapsed'}
                             to="/contact">
                        <i className="bi bi-envelope"></i>
                        <span>Контактная информация</span>
                    </NavLink>
                </li>

            </ul>

        </aside>
    );
});
