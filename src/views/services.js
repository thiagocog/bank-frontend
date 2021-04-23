import { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button, Row, Col } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { getServices } from "../store/service/serv.action";
import TableList from '../components/services/tableList';
import FormService from '../components/services/form';
import styled from 'styled-components';


const ManageServices = () => {

    // document.title = 'TB - services'
    const dispatch = useDispatch()
    const [isForm, setIsForm] = useState(false)
    const services = useSelector(state => state.service.all)

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch])


    return (

        <SRow>
            <SCol>
                <STitlePage>
                    Services Management
                    <SButton onClick={() => setIsForm(!isForm)} size="sm" color="info">{isForm ? 'Listar' : 'Cadastrar'}</SButton>
                </STitlePage>
                {isForm ? <FormService setIsForm={setIsForm}  /> : <TableList services={services} />}
            </SCol>
        </SRow>

    )
}
    


export default ManageServices

const STitlePage = styled(TitlePage)`
    width: 100%;
    display: flex;
    margin-bottom: 30px;
    padding: 15px 10px;
`

const SRow = styled(Row)`
    width: 100%;
    margin-top: 60px;
`

const SCol = styled(Col)`
    width: 100%;
`

const SButton = styled(Button)`
    padding: 5px 18px;
`