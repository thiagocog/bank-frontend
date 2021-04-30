import { Col, Label, Row, FormGroup, Input } from 'reactstrap'
import styled from 'styled-components'



const FormServices = ({ state }) => {

    const [form, setForm] = state

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }


    return (

        <BoxInscricao>
            <Col xs="12" sm="12" md="12" lg="12">
                <FormGroup>
                    <Label for="name">Service Name</Label>
                    <Input type="text" id="name" value={form.name || ""} onChange={handleChange} name="name" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Manager</Label>
                    <Input type="text" id="manager" value={form.manager || ""} onChange={handleChange} name="manager" />
                </FormGroup>
                <FormGroup>
                    <Label for="name">Description</Label>
                    <TextArea type="textarea" id="description" value={form.description || ""} onChange={handleChange} name="description" />
                </FormGroup>
            </Col>
        </BoxInscricao>

    )
}

export default FormServices

const BoxInscricao = styled(Row)`
`

const TextArea = styled(Input)`
    height: 150px !important;
`