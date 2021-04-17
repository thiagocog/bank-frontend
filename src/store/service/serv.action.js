
import { getBankAllServices } from '../../services/serv.service';

export const TYPES = {
  SERVICE_LOADING: "SERVICE_LOADING",
  SERVICE_ALL: "SERVICE_ALL",
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
