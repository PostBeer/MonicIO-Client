import {$authHost, $host} from ".";
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
        url: process.env.SERVER_URL + `/api/auth/info`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const editPassword = async (oldPassword, newPassword, newPasswordConfirm) => {

    return axios({
        method: 'POST',
        url: process.env.SERVER_URL + `/api/profile/changePassword`,
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

    return fetch(process.env.SERVER_URL + "/api/profile/changeInfo", {
        method: "PUT",
        body: formData,
        headers: {'Authorization': 'Bearer ' + getToken()}
    })
}

export const activateUser = async (token) => {
    return $host.get(process.env.SERVER_URL + "/activate/" + token);
}

export const checkPasswordToken = async (token) => {
    return $host.get(process.env.SERVER_URL + "/forget/" + token);
}

export const executePasswordToken = async (password, passwordConfirm, token) => {
    return $host.post(process.env.SERVER_URL + "/forget/" + token, {password, passwordConfirm});
}

export const getPasswordToken = async (email) => {
    return $host.post(process.env.SERVER_URL + "/forget/email", {email});
}

export const sendCallback = async (name, email, theme, message) => {
    return $authHost.post(process.env.SERVER_URL + "/callback", {name, email, theme, message});
}

export {
    login,
    registration,
    check
}