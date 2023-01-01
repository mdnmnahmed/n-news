/*
 * Filename: apiCallsHandler.js
 * Created Date: Saturday, December 31st 2022, 9:33:46 pm
 * Author: Md. Numan Ahmed
 * Description: Responsible for ALL API Requests
 * Developed with ❤️
 * Copyright (c) 2022 N_Ah
 */

import axios from "axios";
import { toast } from "react-toastify";
import { getCookie } from "./cookiesHandler";
import { N_NEWS_TOKEN } from "../../utils_global/constants";

/**
 * Fetch Data from the API & return Response
 * @param {String} endpoint 
 * @param {String} method - HTTP Methods - GET | POST | DELETE | PUT | PATCH
 * @param {Object} data 
 * @param {String} endpointPrefix - EndPoint Prefix. default - '/api'
 * @returns - {Object} - API response
 */
export const apiCallsHandler = async (endpoint, method = "GET", data = null, endpointPrefix = "api") => {
    const API_URL = (process.env.API_BASE_URL || 'http://localhost:3000/') + endpointPrefix + endpoint;
    const nNewsToken = getCookie(N_NEWS_TOKEN) || '';
    let config = {
        method: method,
        url: API_URL,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': nNewsToken
        }
    };

    if (method !== "DELETE") {
        config.data = data;
    }

    const response = await axios(config)
        .catch((error) => {
            // toast.error(error.response.data.error);
            throw error.response.data;
        });

    return response.data;
}