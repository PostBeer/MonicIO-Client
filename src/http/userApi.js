import { $authHost,$host } from ".";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const login =async (email,userName,password) =>{
    const {data} = await $host.post('api/auth/login',{email,userName,password})
    localStorage.setItem('token',data.jwt)
    return jwt_decode(data.jwt)
}

const registration = (email,userName, password) => {
    return $host.post('api/auth/register', {
        userName,
        password,
        email
    })
};

const getToken=()=>{
    return localStorage.getItem('token');
}

const check = async () =>{
    return axios({
        method:'GET',
        url:`http://localhost:8080/api/auth/userinfo`,
        headers:{
            'Authorization':'Bearer '+getToken()
        }
    })
}



export {
    login,
    registration,
    check
}