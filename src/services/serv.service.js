// SERVICES SERV.SERVICE

import http from "../config/http";


const getBankAllServices = () => http.get("/services")

const getServiceDetails = (id) => http.get(`/services/${id}`)
// acho que o back não está enviando os clients para um usuário cliente (na verdade o back só envia o próprio aluno para o usuário cliente -- essa parte é importante)

const createServiceClient = (id, data) => http.post(`services/${id}/client`, data)

const updateService = (id, data) => http.put(`/services/${id}`, data)

const removeService = (id) => http.delete(`services/${id}`)

const deleteServiceClient = (id_service, id_client) => http.delete(`/services/${id_service}/client/${id_client}`)

const createServService = (service) => http.post(`services`, service);

export {
  getBankAllServices,
  getServiceDetails,
  createServiceClient,
  deleteServiceClient,
  createServService,
  updateService,
  removeService
};
