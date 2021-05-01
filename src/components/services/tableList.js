import { Table } from 'reactstrap'
import styled from 'styled-components'
import { BiTrash, BiEdit } from 'react-icons/bi'
import { Link } from 'react-router-dom'



const TableList = (props) => {

    const { services, editService, deleteService } = props

    return (
        
        <STable responsive striped size="sm">
            <thead>
                <TableTr>
                    <th>SERVICE</th>
                    <th>CUSTOMERS</th>
                    <th>MANAGER</th>
                    <th>ACTIONS</th>
                </TableTr>
            </thead>
            <tbody>
                {services?.map((service, i) => (
                    <TableTr key={i}>
                        <td><Link to={`/details/${service.id}`}>{service.name}</Link></td>
                        <td>{service.subscribes}</td>
                        <td>{service.manager}</td>
                        <td>
                            <BiEdit style={{ cursor: "pointer" }} className="text-primary mr-1 font-weight-normal" onClick={() => editService(service.id)} />
                            <BiTrash style={{ cursor: "pointer" }} className="text-danger font-weight-normal" onClick={() => deleteService(service)} />
                        </td>
                    </TableTr>
                ))}
            </tbody>
        </STable>
    )

}

export default TableList;



const STable = styled(Table)`

    overflow: hidden;
    border-radius: 6px;
    font-family: "Roboto", sans-serif !important;
    margin-bottom: 80px;


    /* thead {
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
            font-weight: bold;
        }
        td:nth-child(2) {
            text-align: center;
        }
        td:nth-child(3) {
            text-align: right;
            max-width: 70px;
        }
    } */
   
`

const TableTr = styled.tr`

    th {
        background-color: rgb(206, 59, 87, 0.2);
        padding: 10px;
    }
    td {
        vertical-align: middle;
        padding: 10px;
    }
`
