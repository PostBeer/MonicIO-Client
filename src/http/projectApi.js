import axios from "axios";
import {getToken} from "./userApi";

export const createProject = async (title,description,creator,status) => {

    return axios({
        method: 'POST',
        url: process.env.SERVER_URL + `/api/projects`,
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
        url: process.env.SERVER_URL + `/api/projects/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}
export const deleteProject = async (id) => {
    return axios({
        method: 'DELETE',
        url: process.env.SERVER_URL + `/api/projects/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}