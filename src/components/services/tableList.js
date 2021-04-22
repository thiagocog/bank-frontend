import { Table } from 'reactstrap'

const TableList = ({ services }) => {

    return (
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>SERVICE</th>
                </tr>
            </thead>
            <tbody>
                {services?.map((service, i) => (
                    <tr key={i}>
                        <th scope="row">{service.id}</th>
                        <td>{service.name}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )

}

export default TableList;
