import axios from "axios";
import {getToken} from "./userApi";

export const createTask = async (name, description, completeDate, id) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL + `/api/projects/${id}/tasks/create`,
        data: {
            name: name,
            description: description,
            completeDate: completeDate
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const takeTask = async (id, taskId) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL + `/api/projects/${id}/tasks/take`,
        params: {
            task: taskId
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const sendTaskForCheck = async (id, taskId) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL + `/api/projects/${id}/tasks/forCheck`,
        params: {
            task: taskId
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const cancelTaskCheck = async (id, taskId) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL + `/api/projects/${id}/tasks/forCheck/cancel`,
        params: {
            task: taskId
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const checkTask = async (id, taskId, success) => {

    return axios({
        method: 'POST',
        url: process.env.REACT_APP_SERVER_URL + `/api/projects/${id}/tasks/check`,
        params: {
            task: taskId,
            success
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const deleteTask = async (id) => {
    return axios({
        method: 'DELETE',
        url: process.env.REACT_APP_SERVER_URL + `/api/tasks/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const loadTasks = async (url) => {
    return axios({
        method: 'GET',
        url: url,
        params: {
            size: 5
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}