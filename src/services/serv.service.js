import http from "../config/http";

const getBankAllServices = () => http.get("/services");
const getServiceDetails = (id) => http.get(`/services/${id}`);

const createServiceClient = (id, data) =>
  http.post(`services/${id}/client`, data);

const deleteServiceClient = (id_service, id_client) =>
  http.delete(`/services/${id_service}/client/${id_client}`);

export {
  getBankAllServices,
  getServiceDetails,
  createServiceClient,
  deleteServiceClient,
};
