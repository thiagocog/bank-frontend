import { getBankAllUsers } from '../../services/client.service'

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
