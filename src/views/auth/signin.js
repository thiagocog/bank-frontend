import React, { useState, useEffect } from 'react';
import {
  Card, CardBody,
  Button, Col, Alert,
  CardHeader, Spinner, Label,
  CardFooter, Form, FormGroup, Input
} from 'reactstrap';
import { Sign } from '../../assets/styled';
import { Link } from 'react-router-dom';
import { signInAction } from '../../store/auth/auth.action'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';



const SignIn = () => {

  const dispatch = useDispatch();
  const [hasError, setHasError] = useState(false);
  const error = useSelector(state => state.auth.error)
  const loading = useSelector(state => state.auth.loading)


  const [form, setForm] = useState({})


  const handleChange = (props) => {
    const { name, value } = props.target;
    setForm({
        ...form,
        [name]: value,
    });
  };

  const closeError = () => setHasError(false);

  const submitForm = (event) => {
    event.preventDefault()
    dispatch(signInAction(form))
  }


  const isNotValid = () => form?.user?.length === 0 || form?.password?.length === 0

  useEffect(() => {
    setHasError(error.length > 0)
  }, [error])



  return (
    <Sign>
      <Col sm={12} md={8} lg={5}>

        <Alert color="danger" isOpen={hasError} toggle={closeError}>
          <div><strong>OPS! </strong>Aconteceu um erro.</div>
          <small>Verifique o usuário e a senha.</small>

        </Alert>

        <Card>
          <SCardHeader tag="h4" className="text-center">Login</SCardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input disabled={loading} type="email" name="user" id="user" onChange={handleChange} value={form.user || ""} placeholder="Informe seu E-mail" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input disabled={loading} type="password" name="password" id="password" onChange={handleChange} value={form.password || ""} placeholder="Informe sua senha" />
              </FormGroup>

              <SButton color={isNotValid() || loading ? 'secondary' : 'info'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
                {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Enviar"}
              </SButton>
            </Form>
          </CardBody>

          <CardFooter className="text-muted">
              Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
          </CardFooter>
        </Card>
      </Col>
    </Sign>
  )
}

export default SignIn

const SCardHeader = styled(CardHeader)`
  background-color: rgb(206, 59, 87, 0.1);
`

const SButton = styled(Button)`
  .btn-info {
    background-color: rgb(206, 59, 87, 0.1);
  }
`