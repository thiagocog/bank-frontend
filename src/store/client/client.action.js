import { createSubscriptionInService, getBankAllUsers, removeSubscriptionInService } from '../../services/client.service'
import { getDetails } from '../service/serv.action'

export const TYPES = {
    CLIENT_ALL: "CLIENT_ALL"
}

export const getClientAll = () => {
    return async (dispatch) => {

        try {
            const all = await getBankAllUsers()
            dispatch({
                type: TYPES.CLIENT_ALL, 
                data: all.data
            })
        } catch (error) {
            console.log(`Erro ao buscar os clientes (getClientAll)`);
        }

    }
}

export const updateProfile = (id) => {

    return async (dispatch) => {

        try {
            
        } catch (error) {
            
        }

    }
}

export const createSubscription = (id_service) => {

    return async (dispatch) => {

        try {

            const all = await createSubscriptionInService(id_service);
            if (all.data) {
                dispatch(getDetails(id_service))
            }

        } catch (error) {
            console.log(`Erro na action ao fazer a inscrição do cliente`);
        }
    }
}

export const removeSubscription = (id_service, id_subscription) => {

    return async (dispatch) => {

        try {

            const all = await removeSubscriptionInService(id_service, id_subscription)
            if (all.data) {
                dispatch(getDetails(id_service))
            }

        } catch (error) {
            console.log('aconteceu um ERRO": disparar um e-mail para Admin')
        }
    }

}