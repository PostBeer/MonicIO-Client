import {NavLink, useLocation} from "react-router-dom";
import {useContext} from "react";
import {Context} from "../index";

export const SideBar = () => {
    const location = useLocation()
    const {user} = useContext(Context)
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
                    <NavLink className={location.pathname === '/projects' ? 'nav-link' : 'nav-link collapsed'} to="/home">
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
                    <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                        <li>
                            <NavLink to="components-alerts.html">
                                <i className="bi bi-circle"></i><span>Курсач</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="components-accordion.html">
                                <i className="bi bi-circle"></i><span>Диплом</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="components-badges.html">
                                <i className="bi bi-circle"></i><span>Секретный проект</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">
                                <i className="bi bi-circle"></i><span>Секретный проект</span>
                            </NavLink>
                        </li>

                    </ul>
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
            {/*<ul className="sidebar-nav" id="sidebar-nav">*/}

            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link " to="index.html">*/}
            {/*            <i className="bi bi-grid"></i>*/}
            {/*            <span>Мониторинг проектов</span>*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <!-- End Dashboard Nav -->*/}

            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link collapsed" data-bs-target="#components-nav" data-bs-toggle="collapse"*/}
            {/*                 to="#">*/}
            {/*            <i className="bi bi-menu-button-wide"></i><span>Проекты</span><i*/}
            {/*            className="bi bi-chevron-down ms-auto"></i>*/}
            {/*        </NavLink>*/}
            {/*        <ul id="components-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">*/}
            {/*            <li>*/}
            {/*                <NavLink to="components-alerts.html">*/}
            {/*                    <i className="bi bi-circle"></i><span>Курсач</span>*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <NavLink to="components-accordion.html">*/}
            {/*                    <i className="bi bi-circle"></i><span>Диплом</span>*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}
            {/*            <li>*/}
            {/*                <NavLink to="components-badges.html">*/}
            {/*                    <i className="bi bi-circle"></i><span>Секретный проект</span>*/}
            {/*                </NavLink>*/}
            {/*            </li>*/}

            {/*        </ul>*/}
            {/*    </li>*/}
            {/*    <!-- End Components Nav -->*/}
            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link collapsed" to="users-profile.html">*/}
            {/*            <i className="bi bi-people"></i>*/}
            {/*            <span>Сотрудники</span>*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}

            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link collapsed" to="users-profile.html">*/}
            {/*            <i className="bi bi-person"></i>*/}
            {/*            <span>Профиль</span>*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <!-- End Profile Page Nav -->*/}

            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link collapsed" to="pages-faq.html">*/}
            {/*            <i className="bi bi-question-circle"></i>*/}
            {/*            <span>F.A.Q</span>*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <!-- End F.A.Q Page Nav -->*/}

            {/*    <li className="nav-item">*/}
            {/*        <NavLink className="nav-link collapsed" to="pages-contact.html">*/}
            {/*            <i className="bi bi-envelope"></i>*/}
            {/*            <span>Контактная информация</span>*/}
            {/*        </NavLink>*/}
            {/*    </li>*/}
            {/*    <!-- End Contact Page Nav -->*/}


            {/*</ul>*/}
        </aside>
    );
};
