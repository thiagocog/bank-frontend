// Importações externas
import React, { useEffect, useState } from 'react';
import { TitlePage } from "../assets/styled";
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import ReactSwal from '../plugins/swal';
import styled from 'styled-components';

// Importações internas
import { getServices, getDetails, createService, serviceUpdate, serviceRemove } from "../store/service/serv.action";
import TableList from '../components/services/tableList';
import FormService from '../components/services/form';



const ManageServices = () => {

    // state
    const dispatch = useDispatch()
    const [modal, setModal] = useState(false)
    const [isUpdate, setUpdate] = useState(false)
    const stateForm = useState({})
    const [form, setForm] = stateForm
    
    // store
    const services = useSelector(state => state.service.all)
    const details = useSelector(state => state.service.details)

    // functions
    const toggle = () => setModal(!modal)

    useEffect(() => {
        dispatch(getServices());
    }, [dispatch])


    const editTable = (id) => {
        dispatch(getDetails(id))
            .then(() => {
                setForm({ ...form, id})
                setUpdate(true)
                toggle()
            })
    }

    
    const deleteTable = (service) => {

        ReactSwal.fire({
            title: `Deseja excluir o serviço ${service.name}?`,
            showDenyButton: false,
            showCancelButton: true,
            confirmButtonText: `Yes`,
            cancelButtonText: `No`,
        })
            .then((result) => {
                if (result.isConfirmed) {
                    dispatch(serviceRemove(service.id))
                        .then(() => {
                            ReactSwal.fire({
                                icon: 'success',
                                title: `O Serviço ${service.name} foi deletado com sucesso !`,
                                showConfirmButton: false,
                                showCloseButton: true,
                            })
                        })
                }
            })

    }

    const submitForm = () => {
        dispatch(isUpdate ? serviceUpdate(form) : createService(form))
            .then(() => {
                setForm({})
                toggle()

                ReactSwal.fire({
                    icon: 'success',
                    title: `Serviço ${form.name} cadastrado com sucesso !`,
                    showConfirmButton: false,
                    showCloseButton: true,
                    timer: 4000,
                })

            })
    }

    useEffect(() => {
        setForm({ ...details })
    }, [details, setForm])


    return (

        <SRow>
            <SCol>

                <STitlePage>
                    Services Management
                    <SButton onClick={toggle} size="sm" color="info">Register</SButton>
                </STitlePage>

                <TableList services={services} editService={editTable} deleteService={deleteTable} />


                <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {isUpdate ? "Update" : "Register"} service

                </ModalHeader>
                <ModalBody>
                    <FormService state={stateForm} />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={submitForm}>
                        {isUpdate ? "Update" : "Register"}
                    </Button>
                </ModalFooter>
            </Modal>



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
    font-family: "Montserrat", serif;
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