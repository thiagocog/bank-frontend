import http from '../config/http'


const getBankAllUsers = () => http.get('/client')

const getBankUser = (id) => http.get(`/client/${id}`)

const createSubscriptionInService = (id, data) => http.post(`/services/${id}/client`, data)

const removeSubscriptionInService = (id_curso, id_subscription) => http.delete(`/services/${id_curso}/client/${id_subscription}`)

const putServiceUser = (id, data) => http.put(`/client/${id}`, data)

export {
    getBankAllUsers,
    createSubscriptionInService,
    removeSubscriptionInService,
    putServiceUser,
    getBankUser
}