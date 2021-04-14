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




const SignUp = () => {

  const [hasError, setHasError] = useState(false)
  const [success, showSuccess] = useState(false)
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading)
  const error = useSelector(state => state.auth.error)
  const registered = useSelector(state => state.auth.registered)

  const [form, setForm] = useState({
    name: 'Thiago',
    email: 'thiago@aluno.com',
    birthday: '25/12/1989',
    password: '123123'
  })

  const handleChange = (props) => {
    const { value, name } = props.target;
    setForm({
        ...form,
        [name]: value,
    });
  };

  const closeError = () => setHasError(false);

  // const formatDate = (date) => '02/02/1989'

  const submitForm = (event) => {
    // const nForm = {
    //   ...form,
    //   datanascimento: formatDate(form.datanascimento)
    // }
    event.preventDefault()
    dispatch(signUpAction(Form))
  }

  const isNotValid = () => {
    const inputs = ['name', 'birthday', 'email', 'password']
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
      <Col sm={12} md={4} lg={5}>
        <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
          <div><strong>Usuario</strong> cadastrado com sucesso.</div>
        </Alert>
        <Alert color="danger" isOpen={hasError} toggle={closeError}>
          <div><strong>OPS! </strong> Aconteceu um erro.</div>
          <small>Verifique o usuário e a senha.</small>
        </Alert>
        <Card>
          <CardHeader tag="h4" className="text-center">Cadastre-se</CardHeader>
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="nome">Name:</Label>
                <Input disabled={loading} type="text" name="name" id="name" onChange={handleChange} value={form.name || ""} placeholder="Informe seu Nome" />
              </FormGroup>
              <FormGroup>
                <Label for="email">E-mail:</Label>
                <Input disabled={loading} type="email" name="email" id="email" onChange={handleChange} value={form.email || ""} placeholder="Informe seu E-mail" />
              </FormGroup>
              <FormGroup>
                <Label for="birthday">Birth date:</Label>
                <Input disabled={loading} type="date" name="birthday" id="birthday" onChange={handleChange} value={form.birthday || ""} placeholder="Informe sua data de nascimento" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password:</Label>
                <Input disabled={loading} type="password" name="password" id="password" onChange={handleChange} value={form.password || ""} placeholder="Informe sua senha" />
              </FormGroup>
              <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="sm" block onClick={submitForm}>
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