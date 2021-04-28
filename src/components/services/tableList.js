import { Table } from 'reactstrap'
import styled from 'styled-components'
import { BiTrash, BiEdit } from 'react-icons/bi'



const TableList = (props) => {

    const { services, editService, deleteService } = props

    return (
        
        <STable>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SERVICE</th>
                    <th>MANAGER</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {services?.map((service, i) => (
                    <tr key={i}>
                        <td>{service.id}</td>
                        <td>{service.name}</td>
                        <td>{service.manager}</td>
                        <td>
                            <BiEdit style={{ cursor: "pointer" }} className="text-primary mr-1 font-weight-normal" onClick={() => editService(service.id)} />
                            <BiTrash style={{ cursor: "pointer" }} className="text-danger font-weight-normal" onClick={() => deleteService(service)} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </STable>
    )

}

export default TableList;



const STable = styled(Table)`
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
