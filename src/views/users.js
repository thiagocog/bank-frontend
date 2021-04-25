import { useEffect } from 'react'
import { TitlePage } from '../assets/styled'
import { Button, Table, Row, Col } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { getServices } from '../store/service/serv.action';
import { getAllUsers } from '../store/auth/auth.action';
import styled from 'styled-components';


const Users = () => {

    const dispatch = useDispatch()
    // const services = useSelector(state => state.service.all)
    const users = useSelector(state => state.auth.all)
    console.log(users);


    // useEffect(() => {
    //     dispatch(getServices());
    // }, [dispatch])



    useEffect(() => {
        dispatch(getAllUsers());
    }, [dispatch])



    const wAuthorization = () => {
        const newAuth = users.map(item => {
            if (item.type === '1') {
                return'Administrator'
            } else {
                return 'Client'
            }
        })
        return newAuth
    }
    const AuthorizationTypes = wAuthorization()
    console.log(AuthorizationTypes)


    return (
        <SRow>
            <SCol>
                <STitlePage>
                    Users
                  <SButton size="sm" color="info">Cadastrar</SButton>
                </STitlePage>
                <STable>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>AUTHORIZATION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* {users?.map((service, i) => (
                            <tr key={i}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{service.type}</td>
                            </tr>
                        ))} */}
                        {users?.map((service, i) => (
                            <tr key={i}>
                                <td>{service.name}</td>
                                <td>{service.email}</td>
                                <td>{AuthorizationTypes[i]}</td>
                            </tr>
                        ))}
                    </tbody>
                </STable>
            </SCol>
        </SRow>

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