import http from '../config/http'


const getBankAllUsers = () => http.get('/client')

export {
    getBankAllUsers
}