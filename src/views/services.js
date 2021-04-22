import { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getServices } from "../store/service/serv.action";
import TableList from '../components/services/tableList';
import FormService from '../components/services/form';



const ManageServices = () => {

    document.title = 'TB - services'
    const dispatch = useDispatch()
    const [isForm, setIsForm] = useState(false)
    const services = useSelector(state => state.service.all)

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch])


    return (

        <>
            {/* <TitlePage>

                Services Management  */}
                <Button onClick={() => setIsForm(!isForm)} size="sm" color="info">{isForm ? 'Listar' : 'Cadastrar'}</Button>

            {/* </TitlePage> */}

            {isForm ? <FormService setIsForm={setIsForm} /> : <TableList services={services} />}
        </>

    )
}
    


export default ManageServices