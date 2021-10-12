import Axios from 'axios';

// export const baseURL = 'http://188.225.36.187/';
export const baseURL = 'http://kyrgyzuna.kg/'

export const API = {
    get: ({url, params, ...rest}) =>
        Axios({
            method: 'GET',
            url,
            params,
            baseURL,
            ...rest
        }),
    post: ({url, data, ...rest}) =>
        Axios({
            method: 'POST',
            url,
            data,
            baseURL,
            ...rest
        }),
}
