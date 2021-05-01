
import { 
  getBankAllServices, 
  createServService, 
  getServiceDetails, 
  deleteServiceClient,
  updateService,
  removeService
} from '../../services/serv.service';

export const TYPES = {
  SERVICE_LOADING: "SERVICE_LOADING",
  SERVICE_ALL: "SERVICE_ALL",
  SERVICE_DETAILS: "SERVICE_DETAILS"
}


export const getServices = () => {
  return async (dispatch) => {
    // carregar o loading antes de chamar o serviço
    dispatch({ type: TYPES.SERVICE_LOADING, status: true })

    try {
      const all = await getBankAllServices()
      dispatch({
        type: TYPES.SERVICE_ALL,
        data: all.data
      })
    } catch (error) {
      dispatch({ type: TYPES.SERVICE_LOADING, status: false })
      console.log('aconteceu um ERRO": disparar um e-mail para Admin')
    }
  }
}


export const createService = (service) => {

  return async (dispatch) => {

    dispatch({ type: TYPES.SERVICE_LOADING, status: true })

    try {

      await createServService(service)
      dispatch(getServices())

    } catch (error) {

      dispatch({ type: TYPES.SERVICE_LOADING, status: false})
      console.log(`##### Erro ao criar um novo serviço #####`);
      
    }
  }
} 


export const serviceUpdate = ({ id, manager, name, description }) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SERVICE_LOADING, status: true })

    try {

      const data = { manager, name, description }
      await updateService(id, data)
      dispatch(getServices())
      
    } catch (error) {

      dispatch({ type: TYPES.COURSE_LOADING, status: false })
      console.log('aconteceu um ERRO": Erro ao EDITAR SERVIÇO')

    }
  }
}


export const serviceRemove = (id_service) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SERVICE_LOADING, status: true })

    try {

      await removeService(id_service)
      dispatch(getServices())

    } catch (error) {

      dispatch({ type: TYPES.COURSE_LOADING, status: false })
      console.log('aconteceu um ERRO": Erro ao Excluir curso')

    }
  }
}


export const getDetails = (id_service) => {
  return async (dispatch) => {
    try {

      const res = await getServiceDetails(id_service)
      console.log(res)
      res.data.registered = res.data.clients.length > 0;
      console.log(res.data.registered)

      dispatch ({
        type: TYPES.SERVICE_DETAILS,
        data: res.data
      })
      
    } catch (error) {
      dispatch({ type: TYPES.SERVICE_LOADING, status: false})
      console.log("ERRO AO DETALHAR O CURSO (GETDETAILS)", error);
    }
  }
}


export const deleteSubscription = (id_client) => {

  return async (dispatch, getState) => {
    const { service } = getState()
    dispatch({ type: TYPES.SERVICE_LOADING, status: true })

    try {
      const res = await deleteServiceClient(service.details.id, id_client)

      if (res.status === 200) {
        dispatch(getDetails(service.details.id))
      }

    } catch (error) {
      dispatch({ type: TYPES.SERVICE_LOADING, status: false })
      console.log(`Aconteceu um erro: Erro ao excluir cliente.`);
    }
  }
}
