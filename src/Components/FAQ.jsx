import {Header} from "./Header";
import {SideBar} from "./SideBar";
import {Footer} from "./Footer";
import {NavLink} from "react-router-dom";

export const FAQ = () => {
    return (
        <div>
            <Header/>
            <SideBar/>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>F.A.Q</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><NavLink href="/">Главная</NavLink></li>
                            <li className="breadcrumb-item">О нас</li>
                            <li className="breadcrumb-item active">F.A.Q.</li>
                        </ol>
                    </nav>
                </div>


                <section className="section faq">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="card basic">
                                <div className="card-body">
                                    <h5 className="card-title">Общее предназначение системы</h5>
                                    <div className="accordion accordion-flush" id="faq-group-1">

                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsOne-1"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>1. Для кого создан сервис MonicIO?</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsOne-1" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    Данный сервис предназначен для пользования менеджерами проектов,
                                                    индивидуальных участников команды, руководителей и владельцев
                                                    компаний,
                                                    которые заинтересованы в эффективном управлении проектами.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsOne-2"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>2. Я разработчик компании. Для чего мне нужен MonicIO?</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsOne-2" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    1. Упорядочивание задач. Система контроля проекта помогает
                                                    организовать
                                                    задачи разработчика в более логичном и понятном порядке.<br/>
                                                    2. Управление временем. Система контроля проекта позволяет
                                                    разработчику
                                                    управлять временем, задействованным в проекте, и успешно планировать
                                                    свою
                                                    работу.<br/>
                                                    3. Оптимизация коммуникации. Система контроля проекта позволяет
                                                    разработчику
                                                    легче общаться с другими членами команды и уведомлять их о своем
                                                    прогрессе.<br/>
                                                    4. Избежание ошибок. Система контроля проекта может помочь
                                                    разработчику
                                                    избежать ошибок, снижая вероятность забыть какие-то задачи или
                                                    упустить
                                                    сроки.
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsOne-3"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>3. Я руководитель проекта. Для чего мне нужен MonicIO?</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsOne-3" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-1">
                                                <div className="accordion-body">
                                                    1. Управление проектом. Система контроля проекта позволяет
                                                    руководителю
                                                    проекта более эффективно управлять проектом, включая управление
                                                    бюджетом,
                                                    графиком, ресурсами и рисками проекта.<br/>
                                                    2. Оптимизация процессов. Система контроля проекта помогает
                                                    автоматизировать
                                                    и оптимизировать процессы управления проектом, упрощая многие
                                                    рутинные
                                                    задачи, такие как отслеживание времени и управление
                                                    документами.<br/>
                                                    3. Сокращение времени на принятие решений. Система контроля проекта
                                                    облегчает доступ к информации и ресурсам проекта, что позволяет
                                                    руководителю
                                                    проекта принимать более обоснованные и быстрые решения.<br/>
                                                    4. Отчетность и аналитика. Система контроля проекта предоставляет в
                                                    режиме
                                                    реального времени отчетность и аналитику по проекту, что позволяет
                                                    руководителю проекта быть в курсе текущей ситуации и реагировать на
                                                    нее
                                                    быстрее.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-6">

                            <div className="card basic">
                                <div className="card-body">
                                    <h5 className="card-title">Начало использования</h5>
                                    <div className="pt-2">
                                        <h6>Необходимые треобвания для использования MonicIO</h6>
                                        <p>Для использования продукта вам достаточно иметь любое устройство с
                                            возможность выхода в интернет.<br/>
                                            Для того,чтобы начать работу вам достаточно зарегистрироваться на
                                            сайте и выполнить вход в систему.<br/>
                                            После авторизации вам будет доступен функционал приложения в соответствии с
                                            выбранной должностью. </p>
                                    </div>


                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">
                            <div className="card basic">
                                <div className="card-body">
                                    <h5 className="card-title">Руководство для разработчика</h5>
                                    <div className="accordion accordion-flush" id="faq-group-2">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsTwo-1"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>1. Личный кабинет</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-1" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    Для того,чтобы попасть в личный кабинет перейдите по навигационной
                                                    вкладке "Профиль"<br/>
                                                    В личном кабинете вы можете просмотреть свои текущие данные и
                                                    изменить изменить их
                                                    Для смены имени пользователя,почты и аватара перейдите во вкладку
                                                    "Изменить данные" и заполните поля,которые вы хотите изменить<br/>
                                                    Для смены пароля перейдите во вкладку "Сменить пароль" и введите
                                                    старый пароль,новый пароль и подтверждение пароля
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsTwo-2"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>2. Проекты</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-2" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    Как разработчик вы имеете доступ к участию в разработке проектов а
                                                    именно:<br/>
                                                    1. Присоединение к проектам. <br/>
                                                    Для этого перейдите во вкладку
                                                    "Проекты" и нажмите на кнопку запрос на присоединение к
                                                    команде.После подтверждения запроса руководителем проекта вы
                                                    присоединитесь к проекту<br/>
                                                    задачи разработчика в более логичном и понятном порядке.<br/>
                                                    2. Просмотр проектов. <br/>
                                                    Проекты в которых вы участвуете отображены в боковом меню во
                                                    вкладке "Мои проекты" и выберите проект,который вы хотите
                                                    просмотреть.После выбора проекта вы перейдёте на страницу
                                                    проекта,где вам будет доступна информация о сотстоянии проекта и
                                                    список участников проекта с соответствующими
                                                    должностями<br/>
                                                    3. Чат проекта.<br/>
                                                    Для улучшения коммуникации внутри проекта на вкладке
                                                    проекта есть секция чата,в котором можно
                                                    общаться с другими членами команды и уведомлять их о своем
                                                    прогрессе.<br/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsTwo-3"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>3. Задачи</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsTwo-3" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-2">
                                                <div className="accordion-body">
                                                    Список возможностей взаимодействия с задачами:<br/>
                                                    1. Просмотр задач.<br/>
                                                    На странице проекта вы можете просмотреть список всех задач,которые
                                                    есть в данном проекте
                                                    На вкладке "Мои задачи" вы можете просмотреть все задачи,которые вы
                                                    взяли на исполнение.<br/>
                                                    2. Исполнение задачи.<br/>
                                                    На странице проекта вы можете взять задачу на исполнение.
                                                    После этого задача попадает в раздел "Мои задачи", после этого вы
                                                    можете пометить задачу выполненной<br/>
                                                    3. Уведомление о закрытии задачи.<br/>
                                                    После подтверждения выополнения задачи вы можете увидеть на странице
                                                    проекта пометку в таблице задач,как выполненную.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="card basic">
                                <div className="card-body">
                                    <h5 className="card-title">Руководство для руководителя проектов</h5>
                                    <div className="accordion accordion-flush" id="faq-group-3">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsThree-1"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>1. Личный кабинет</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsThree-1" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    Для того,чтобы попасть в личный кабинет перейдите по навигационной
                                                    вкладке "Профиль"<br/>
                                                    В личном кабинете вы можете просмотреть свои текущие данные и
                                                    изменить изменить их
                                                    Для смены имени пользователя,почты и аватара перейдите во вкладку
                                                    "Изменить данные" и заполните поля,которые вы хотите изменить<br/>
                                                    Для смены пароля перейдите во вкладку "Сменить пароль" и введите
                                                    старый пароль,новый пароль и подтверждение пароля
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsThree-2"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>2. Проекты</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsThree-2" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    Как руководитель проектов вы имеете доступ к модерации проектов а
                                                    именно:<br/>
                                                    1. Создание проектов. <br/>
                                                    Для этого перейдите во вкладку
                                                    "Проекты" и нажмите на кнопку "Создать новык проект".<br/>
                                                    После этого в модальном окне заполните данные о проекте. Созданный
                                                    проект появится во вкладке "Мои проекты"<br/>
                                                    2. Администрирование проектов. <br/>
                                                    На вкладке проекта вы можете изменить название и описание
                                                    прокета,добавлять задачи,а также принимать участников в проект в
                                                    соответствующем разделе "Заявки на вступление в проект"<br/>
                                                    3. Чат проекта.<br/>
                                                    Для улучшения коммуникации внутри проекта на вкладке
                                                    проекта есть секция чата,в котором можно
                                                    общаться с другими членами команды и уведомлять их о новых задачах
                                                    или необходимости выполнения имеющихся.<br/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsThree-3"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>3. Задачи</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsThree-3" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    1. Создание задач.<br/>
                                                    На вкладке проекта в соответствующем разделе "Создание задачи" вы
                                                    можете заполнить форму с указанием данных о задаче.После создания
                                                    задачи она появится на странице проекта<br/>
                                                    2. Редактирование задач.<br/>
                                                    Нажав на кнопку редактирования задачи в таблице задач вы можете
                                                    изменить дедлайн для задачи или её статус.<br/>
                                                    3. Подтверждение задач.<br/>
                                                    На странице проекта вы можете подтвердить выполненную задачу.После
                                                    этого задача помечается выполненной<br/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item">
                                            <h2 className="accordion-header">
                                                <button className="accordion-button collapsed"
                                                        data-bs-target="#faqsThree-4"
                                                        type="button" data-bs-toggle="collapse">
                                                    <h6>4. Сотрудники</h6>
                                                </button>
                                            </h2>
                                            <div id="faqsThree-4" className="accordion-collapse collapse"
                                                 data-bs-parent="#faq-group-3">
                                                <div className="accordion-body">
                                                    В разделе "Сотрудники" вы можете посмотреть ваш коллектив,который
                                                    участвует в проектах<br/>На данной странице вы можете посмотреть
                                                    информацию о сотрудниках и проекты,в которых они участвуют
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
            <Footer/>
        </div>
    )
        ;
};