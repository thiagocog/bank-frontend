import http from '../config/http';

const authService = (data) => http.post('/auth', data);


const registerClientService = (data) => http.post('/client', data);


export {
    authService,
    registerClientService
}
