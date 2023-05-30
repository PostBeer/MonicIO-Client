import axios from "axios";
import {getToken} from "./userApi";


export const getAllProjectMessages = async (id) => {
    return axios({
        method: 'GET',
        url: `${process.env.REACT_APP_SERVER_URL}/api/messages/project/${id}`,
        headers: {
            'Authorization': 'Bearer ' + getToken()
        }
    })
}