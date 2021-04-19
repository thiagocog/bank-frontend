
import { useState } from 'react'
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from "styled-components"


const Profile = () => {

    const profile = useSelector(state => state.auth.client)
    console.log(profile);

    const [form, Serform] = useState({ ...profile })

    const handleChange = (event) => {
        const { name, value } = event.target
        Serform({ 
            ...form,
            [name]: value
        })
    }

    const updateForm = () => {
        const nform = {
            ...form,
            name: form.name.toUpperCase(),
            email: form.email.toLowerCase()
        }
        console.log(nform);
    }

   
    return (
        <>
            <BoxInscricao>
                <Col xs="12" sm="12" md="10" lg="10">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text" name="name" id="name" value={form.name || ""} className="text-uppercase" onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email" name="email" id="email" value={form.email || ""} className="text-lowercase" onChange={handleChange} />
                    </FormGroup>
                    <BoxDateButton>
                        <FormGroup>
                            <Label for="birthday">Birth Date</Label>
                            <SInput type="date" name="birthday" id="birthday" value={form.birthday || ""} onChange={handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <SButton color="info" onClick={updateForm}>Update</SButton>
                        </FormGroup>
                    </BoxDateButton>
                </Col>
            </BoxInscricao>
        </>
    )



}

export default Profile



// Styled Components

const BoxInscricao = styled(Row)`
    width: 50%;
    justify-content: center;
    align-items: flex-start;
    margin-top: -50px;
`

const SInput = styled(Input)`
    width: 100%;
    flex: 1;
`

const SButton = styled(Button)`
    padding: 6px 26px;
`

const BoxDateButton = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
`