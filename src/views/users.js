import { useEffect, useState } from 'react'
import { TitlePage } from '../assets/styled'
import { Button, Table, Row, Col, Modal, ModalHeader, ModalBody } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getServices } from '../store/service/serv.action';
import { getAllUsers } from '../store/auth/auth.action';
import { getClientAll } from '../store/client/client.action'
import styled from 'styled-components';
import { VscListFilter } from 'react-icons/vsc'



const Users = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state.client.all)
    const [modal, setModal] = useState({
        status: false,
        data: {}
    });

    const toggle = (data = {}) => setModal({
        status: !modal.status,
        data: data
    })

    useEffect(() => {
        dispatch(getClientAll());
    }, [dispatch])



    return (

    <>
        <SRow>
            <SCol>
                <STitlePage>Users</STitlePage>
                <STable>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            {/* <th>AUTHORIZATION</th> */}
                            <th>NUMBER OF PROPOSALS</th>
                            <th>PROPOSALS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users?.map((user, i) => (
                            <tr key={i}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.clients.length}</td>
                                <td>{user.clients.length > 0 ? <div onClick={() => toggle(user)} style={{cursor: 'pointer'}}><VscListFilter/></div> : "" } </td>
                            </tr>
                        ))}
                    </tbody>
                </STable>
            </SCol>
        </SRow>


        <Modal isOpen={modal.status} toggle={toggle} >
            <ModalHeader toggle={toggle}>Services List</ModalHeader>
            <ModalBody>
                <Table>
                    <tbody>
                        {modal.data?.clients?.map((v, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{v.service}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </ModalBody>
        </Modal>
    </>                    

    )
}


export default Users




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

const STable = styled(Table)`
    thead {
        th:nth-child(1) {
            text-align: left;
        }
        th:nth-child(2) {
            text-align: center;
        }
        th:nth-child(3) {
            text-align: right;
        }
    }

    tbody {
        td:nth-child(1) {
            text-align: left;
            /* font-weight: bold; */
        }
        td:nth-child(2) {
            text-align: center;
        }
        td:nth-child(3) {
            text-align: right;
            max-width: 70px;
        }
    }
   
`






    // const services = useSelector(state => state.service.all)
    // const users = useSelector(state => state.auth.all)
    // console.log(users);


    // useEffect(() => {
    //     dispatch(getServices());
    // }, [dispatch])



    // FUNÇÃO PARA DETERMINAR O TIPO DE AUTORIZAÇÃO DO USUÁRIO (SE ADMIN OU CLIENT)
    // const wAuthorization = () => {
    //     const newAuth = users.map(item => {
    //         if (item.type === '1') {
    //             return'Admin'
    //         } else {
    //             return 'Client'
    //         }
    //     })
    //     return newAuth
    // }
    // const AuthorizationTypes = wAuthorization()
    // // console.log(AuthorizationTypes)



    {/* {users?.map((service, i) => (
        <tr key={i}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{service.type}</td>
        </tr>
    ))} */}
    {/* {users?.map((service, i) => (
        <tr key={i}>
            <td>{service.name}</td>
            <td>{service.email}</td>
            <td>{AuthorizationTypes[i]}</td>
        </tr>
    ))} */}