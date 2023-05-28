import axios from "axios";
import {getToken} from "./userApi";

export const createTask = async (name, description, completeDate, id) => {

    return axios({
        method: 'POST',
        url: `http://localhost:8080/api/projects/${id}/tasks/create`,
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