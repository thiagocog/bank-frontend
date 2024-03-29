import React, { useState, useEffect } from 'react';
import {
    Form, FormGroup, Input,
    Card, Col, CardBody,
    CardHeader,
    Button, CardFooter, Label, Alert, Spinner
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';




const SignUp = () => {
  document.title = 'TechnoBank - SignUp'
  const [hasError, setHasError] = useState(false)
  const [success, showSuccess] = useState(false)
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)
  const error = useSelector(state => state.auth.error)
  const registered = useSelector(state => state.auth.registered)

  const [form, setForm] = useState({})

  const handleChange = (props) => {
    const { name, value } = props.target;
    setForm({
        ...form,
        [name]: value,
    });
  };

  const closeError = () => setHasError(false);

  // const formatDate = (data) => {
  //   const [d, m, y] = data.split('/')
  //   return `${y}-${m}-${d}`
  // }


  const submitForm = (event) => {
    // const nForm = {
    //   ...form,
    //   birthday: formatDate(form.birthday)
    // }
    
    dispatch(signUpAction(form))
  }

  const isNotValid = () => {
    // const inputs = ['name', 'birthday', 'email', 'password']
    const inputs = ['name', 'email', 'password', 'type', 'address']
    const invalid = (label) => !Object.keys(form).includes(label) || form[label].length === 0
    return inputs.some(item => invalid(item))
  }

  useEffect(() => {
    setHasError(error.length > 0)
  }, [error])

  useEffect(() => {
    if (registered) {
      showSuccess(true)
      setForm({})
    }
  }, [registered])

  return (

    <Sign>
      <Col sm={12} md={8} lg={5}>
        <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
          <div><strong>Usuario</strong> cadastrado com sucesso.</div>
          <small>Você será redirecionado em 5 segundos</small>
        </Alert>
        <Alert color="danger" isOpen={hasError} toggle={closeError}>
          <div><strong>OPS! </strong> Aconteceu um erro.</div>
          <small>Verifique o usuário e a senha.</small>
        </Alert>
        <Card>
          <SCardHeader tag="h4" className="text-center">Register</SCardHeader>
          <CardBody>
            <Form>
              <SFormGroup className="radio-input">
                <div>
                  <Label for="type">Client</Label>
                  <Input disabled={loading} type="radio" name="type" id="type-client" onChange={handleChange} value='2' />
                </div>
                <div>
                  <Label for="type">Admin</Label>
                  <Input disabled={loading} type="radio" name="type" id="type-admin" onChange={handleChange} value='1' />
                </div>
              </SFormGroup>
              <FormGroup>
                {/* <Label for="nome">Name:</Label> */}
                <Input disabled={loading} type="text" name="name" id="name" onChange={handleChange} value={form.name || ""} placeholder="Name" />
              </FormGroup>
              <FormGroup>
                {/* <Label for="email">E-mail:</Label> */}
                <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="E-mail" />
              </FormGroup>
              <FormGroup>
                {/* <Label for="address">Address:</Label> */}
                <Input disabled={loading} type="text" name="address" id="address" onChange={handleChange} value={form.address || ""} placeholder="Address" />
              </FormGroup>
              {form.type === '2' && 
                <FormGroup>
                  {/* <Label for="income">Annual Income:</Label> */}
                  <Input disabled={loading} type="number" name="annual_income" id="annual_income" onChange={handleChange} value={form.annual_income || ""} placeholder="Annual income" />
                </FormGroup>
              }
              <FormGroup>
                {/* <Label for="password">Password:</Label> */}
                <Input disabled={loading} type="password" name="password" id="password" onChange={handleChange} value={form.password || ""} placeholder="Password" />
              </FormGroup>
              <Button color={isNotValid() || loading ? 'secondary' : 'info'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                  {loading ? (<><Spinner size="sm" color="light" /> Loading...</>) : "Register"}
              </Button>
            </Form >
          </CardBody>
          <CardFooter className="text-muted">
            Já tem acesso ? <Link to="/signin">Log in</Link>
          </CardFooter>
        </Card>
      </Col>
    </Sign>
  )
}

export default SignUp

const SCardHeader = styled(CardHeader)`
  background-color: rgb(206, 59, 87, 0.1);
`

const SFormGroup = styled(FormGroup)`
  padding: 0 20px;
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
  }
`