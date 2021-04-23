import { Button, Col, Label, Row, FormGroup, Input } from 'reactstrap'
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createService } from '../../store/service/serv.action';
import ReactSwal from '../../plugins/swal';


const FormServices = (props) => {
    const [form, setForm] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    // Não usamos data na regra de negócio dos nossos serviços
    // const formatDate = (data) => {
    //     const [d, m, y] = data.split('/')
    //     return `${y}-${m}-${d}`
    // }

    const handleSubmit = () => {
        
        dispatch(createService(form))

        ReactSwal.fire({
            icon: 'success',
            title: `Service ${form.name} cadastrado com sucesso !`,
            showConfirmButton: false,
            showCloseButton: true,
            timer: 4000,
        })
        setForm({});

        setTimeout(() => {
            props.setIsForm(false)
        }, 4000);
    }


    return (

        <BoxInscricao>
            <Col xs="12" sm="12" md="8" lg="8">
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
                <FormGroup>
                    <Button color="info" onClick={handleSubmit}>Register</Button>
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