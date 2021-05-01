import http from '../config/http'


const getBankAllUsers = () => http.get('/client')

const createSubscriptionInService = (id) => http.post(`/services/${id}/client`)

const removeSubscriptionInService = (id_curso, id_subscription) => http.delete(`/services/${id_curso}/client/${id_subscription}`)

export {
    getBankAllUsers,
    createSubscriptionInService,
    removeSubscriptionInService
}