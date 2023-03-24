import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { registration } from "../../http/userApi";

const Register = () =>{
    const [name,setName] = useState();
    const [password,setPassword]=useState();
    const [email,setEmail]=useState();


    const signIn = async() =>{
        const response = await registration(email,name,password);
        console.log(response)
    }

    return (
        <section class="vh-100">
            <div class="container h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col-lg-12 col-xl-11">
                        <div class="card text-black" >
                            <div class="card-body p-md-5">
                                <div class="row justify-content-center">
                                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                        <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                                        <form class="mx-1 mx-md-4">

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="email" onChange={e =>setName(e.target.value)} id="form3Example3c" class="form-control" />
                                                    <label class="form-label" for="form3Example3c">Ваше имя</label>
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <input type="email" onChange={e => setEmail(e.target.value)}
                                                           id="form3Example3c" className="form-control"/>
                                                    <label className="form-label" htmlFor="form3Example3c">Ваша почта</label>
                                                </div>
                                            </div>

                                            <div class="d-flex flex-row align-items-center mb-4">
                                                <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                <div class="form-outline flex-fill mb-0">
                                                    <input type="password"  onChange={e =>setPassword(e.target.value)} id="form3Example4c" class="form-control" />
                                                    <label class="form-label" for="form3Example4c">Ваш пароль</label>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                <NavLink to="/login" onClick={signIn} class="btn btn-primary btn-lg">Register</NavLink>
                                            </div>

                                        </form>

                                    </div>
                                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                             class="img-fluid" alt="Sample image"></img>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Register;