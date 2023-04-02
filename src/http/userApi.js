import { $authHost,$host } from ".";
import axios from "axios";
import jwt_decode from 'jwt-decode';

const login =async (email,userName,password) =>{
    const {data} = await $host.post('api/auth/login',{email,userName,password})
    localStorage.setItem('token',data.jwt)
    return jwt_decode(data.jwt)
}

const registration = async (email,userName, password,setNameError,setEmailError,setUserExistError,setPasswordError) => {
    let err;
    await $host.post('api/auth/register', {
        userName,
        password,
        email
    }).then(()=>{err=false}).catch((error) => {
        err=true;
        console.log(error.response.data.message)
        if(error.response.data.message) {
            setUserExistError(error.response.data.message);
        }
        if(error.response.data.fieldErrors) {
            error.response.data.fieldErrors.forEach(fieldError => {
                console.log(fieldError)
                switch (fieldError.field){
                    case 'name': {
                        setNameError(fieldError.message);
                        break;
                    }
                    case 'email': {
                        setEmailError(fieldError.message);
                        break;
                    }
                    case 'password': {
                        setPasswordError(fieldError.message);
                        break;
                    }
                }
            });
        }
    })
    console.log(err)
    return err;
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

const checkEdit = async (userName,email,password)=>{
   return $host.post('account/edit',{email,userName,password})
}



export {
    login,
    registration,
    check,
    checkEdit
}
