import axios from "axios";
import {getToken} from "./userApi";

export const createProject = async (title, description, creator, status) => {

    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects`,
        data: {
            title: title,
            description: description,
            creator: creator,
            status: status
        },
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const loadProjects = async (url) => {
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
export const loadProject = async (id) => {
    return axios({
        method: 'GET',
        url: `http://localhost:8080/api/projects/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const deleteProject = async (id) => {
    return axios({
        method: 'DELETE',
        url: `http://localhost:8080/api/projects/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const sendProjectRequest = async (id) => {
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects/${id}/request`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const cancelProjectRequest = async (id) => {
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects/${id}/request/cancel`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const completeProjectRequest = async (id, username, success) => {
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects/${id}/request/${username}`,
        params: {success},
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}

export const leaveFromProject = async (id) => {
    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects/${id}/leave`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}