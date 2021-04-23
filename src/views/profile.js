
import { useState } from 'react'
import { Button, Row, Col, FormGroup, Label, Input, Card, 
    CardBody, CardHeader, Container
} from 'reactstrap'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { TitlePage } from '../assets/styled';


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

        <SContainer>
            
            <STitlePage>Profile</STitlePage>

            <SRow>
                <Col>
                    <div className="image">
                        <img src="/images/bg.svg" alt=""/>
                    </div>
                </Col>
                <Col xs="12" sm="12" md="8" lg="6">
                    <Card>
                        <SCardHeader tag="h5">Edit your Profile</SCardHeader>
                        <CardBody>
                            <FormGroup>
                                <Label for="name">Name</Label>
                                <Input type="text" name="name" id="name" value={form.name || ""} className="text-uppercase" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input type="email" name="email" id="email" value={form.email || ""} className="text-lowercase" onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="birthday">Birth Date</Label>
                                <SInput type="date" name="birthday" id="birthday" value={form.birthday || ""} onChange={handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <SButton color="info" onClick={updateForm}>Update</SButton>
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
    margin: 60px 0 50px;
    padding: 15px 10px;

`

const SRow = styled(Row)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`