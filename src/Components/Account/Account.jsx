import React from "react";
import s from "./Account.css"
import {useState} from "react";
import {NavLink} from "react-router-dom";
import {checkEdit} from '../../http/userApi'

const Account = () =>{
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const checkChanges = async () =>{
        const response  = await checkEdit(name,email,password);
    }
    return (
        <div className={s.l}>
            <div className="container">
                <div className="main-body">
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="Admin"
                                             className="rounded-circle p-1 bg-primary" width="110"></img>
                                            <div className="mt-3">
                                                <h4></h4>
                                                <p className="text-secondary mb-1">Full Stack Developer</p>
                                                <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Имя</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            <input type="text"  onChange={e =>setName(e.target.value)} className="form-label" value={name}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Почта</h6>
                                        </div>
                                        <div className="col-sm-9 colo">
                                            <input type="text"  onChange={e =>setEmail(e.target.value)} className="form-label" value={email}/>
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Пароль</h6>
                                        </div>
                                        <div className="col-sm-9 colo">
                                            <input type="text"  onChange={e =>setPassword(e.target.value)} className="form-label" value={password}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-3"></div>
                                        <div className="col-sm-9 text-secondary">
                                            <NavLink to="/account" onClick={checkChanges}  type="button" className="btn btn-primary px-4">Сохранить изменения</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Account;