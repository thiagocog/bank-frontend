
import { useState } from 'react'
import { Button, Row, Col, FormGroup, Label, Input, Card, 
    CardBody, CardHeader, Container
} from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux'
import styled from "styled-components"
import { TitlePage } from '../assets/styled';
import { updateProfile } from '../store/client/client.action';


const Profile = () => {
    document.title = 'TechnoBank - Profile'
    const dispatch = useDispatch()

    const profile = useSelector(state => state.auth.client)
    const loading = useSelector(state => state.auth.loading)
    const isAdmin = useSelector(state => state.auth.isAdmin)

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
            email: form.email.toLowerCase()
        }
        delete nform.type
        delete nform.subscribes
        dispatch(updateProfile(nform))
    }

    const isNotValid = () => {
        // const inputs = ['name', 'birthday', 'email', 'password']
        const inputs = ['name', 'email', 'address']
        const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0
        return inputs.some(item => invalid(item))
    }

   
    return (

        <SContainer>
            
            <STitlePage>Profile</STitlePage>

            <SRow>
                <SCol>
                    <div className="image">
                        <img src="/images/bg.svg" alt=""/>
                    </div>
                </SCol>
                <Col xs="12" sm="12" md="8" lg="6">
                    <Card>
                        <SCardHeader tag="h5">Edit your Profile</SCardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={form.name || ""} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" value={form.email || ""} className="text-lowercase" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Address</Label>
                                <Input type="text" name="address" id="address" value={form.address || ""} onChange={handleChange} />
                            </FormGroup>
                            {!isAdmin && 
                            <FormGroup>
                                <Label for="email">Annual Income (£)</Label>
                                <Input type="number" name="annual_income" id="annual_income" value={form.annual_income || ""} onChange={handleChange} />
                            </FormGroup>
                            }
                            <FormGroup>
                                <SButton disabled={isNotValid()} color={isNotValid() || loading ? 'secondary' : 'info'} onClick={updateForm}>Update</SButton>
                            </FormGroup>
                        </CardBody>
                    </Card>
                </Col>
            </SRow>
        </SContainer>
    )



}

export default Profile



// Styled Components

const SContainer = styled(Container)`
    /* display: flex; */
    align-items: center;
    justify-content: center;
    
    img {
        width: 80%;
    }

`


const SInput = styled(Input)`
    /* width: 100%; */
    flex: 1;
`

const SButton = styled(Button)`
    padding: 6px 26px;
`

const SCardHeader = styled(CardHeader)`
    /* background-color: #42145F; */
    background-color: #62145f;
    color: #fff;
    text-align: center;
    width: 100%;
`

const STitlePage = styled(TitlePage)`
    /* width: 80%; */
    margin: 60px 0 30px;
    padding: 15px 10px;
   font-family: "Montserrat", serif;
`

const SRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 991px) {
        justify-content: center;
    }
`
const SCol = styled(Col)`
    @media (max-width: 991px) {
        display: none;
    }
`