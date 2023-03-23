import { $authHost,$host } from ".";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const login =async (userName,password) =>{
    const {data} = await $host.post('api/auth/login',{userName,password})
    localStorage.setItem('token',data.jwt)
    return jwt_decode(data.jwt)
}

const registration = (userName, password) => {
    return $host.post('api/auth/register', {
        userName,
        password
    });
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

const getAll = async ()=>{
    const {data} = await $authHost.get('api/user/getall');
    return data;
}

const deleteUser = async (email,role) =>{
    const {data} = await $authHost.post('api/user/delete',{email,role})
    return data;
}

const updateUser = async (role,id)=>{
    const {data} = await $authHost.post('api/user/update',{role,id})
    return data;
}

export {
    login,
    registration,
    check,
    getAll,
    deleteUser,
    updateUser
}