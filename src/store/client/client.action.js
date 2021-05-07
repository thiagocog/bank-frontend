import { createSubscriptionInService, getBankAllUsers, getBankUser, putServiceUser, removeSubscriptionInService } from '../../services/client.service'
import { getDetails } from '../service/serv.action'

export const TYPES = {
    CLIENT_ALL: "CLIENT_ALL",
    CLIENT_PROFILE: "CLIENT_PROFILE"
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

export const updateProfile = ({ id, ...data }) => {

    return async (dispatch) => {

        try {

            const response = await putServiceUser(id, data)
            if (response) {
                const user = await getBankUser(id)
                dispatch({ 
                    type: TYPES.CLIENT_PROFILE,
                    data: user.data
                })
            }
              
        } catch (error) {
            console.log(`Erro ao atualizar usuário`);
        }

    }
}

export const createSubscription = (id_service, data) => {

    return async (dispatch) => {

        try {

            const all = await createSubscriptionInService(id_service, data);
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