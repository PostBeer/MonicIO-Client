import {$host} from ".";
import axios from "axios";

const login = async (username, password) => {
    const {data} = await $host.post('api/auth/login', {username, password})
    localStorage.setItem('token', data.jwt)
    return data.userInfoDTO
}

const registration = (username, name, surname, email, role, password, passwordConfirm) => {
    return $host.post('api/auth/register', {username, name, surname, email, role, password, passwordConfirm})
};

export const getToken = () => {
    return localStorage.getItem('token');
}

const check = async () => {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/auth/info`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const editPassword = async (oldPassword, newPassword, newPasswordConfirm) => {

    return axios({
        method: 'PUT',
        url: `http://localhost:8080/api/profile/changePassword`,
        data: {
            password: oldPassword,
            newPassword: newPassword,
            newPasswordConfirm: newPasswordConfirm
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const editProfile = async (formData) => {

    return fetch("http://localhost:8080/api/profile/changeInfo", {
        method: "PUT",
        body: formData,
        headers: {'Authorization': 'Bearer ' + getToken()}
    })
}

export {
    login,
    registration,
    check
}