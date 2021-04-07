import { useState } from "react";
import { createServiceClient } from "../../services/serv.service";
import { FormGroup, Input, Button, Row, Col } from "reactstrap";
import styled from "styled-components";
import ReactSwal from "../../plugins/swal";

const Client = ({ id, update, isForm }) => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = () => {
    const newForm = {
      ...form,
      name: form.name.toUpperCase(),
      email: form.email.toLowerCase(),
    };
    createServiceClient(id, newForm)
      .then(() => {
        ReactSwal.fire({
          icon: "success",
          title: `Client ${form.name} registered! `,
          showConfirmButton: false,
          showCloseButton: true,
        });
        setForm({});
        update(true);
        isForm(false);
      })
      .catch((error) => console.log("an error happened"));
  };

  return (
    <FormClient>
      <Col xs="12" sm="12" md="12" lg="12">
        <SFormGroup>
          <Input
            type="text"
            name="name"
            id="formName"
            value={form.name || ""}
            onChange={handleChange}
            placeholder="name:"
            autoFocus
            required
            className="text-uppercase"
          />
        </SFormGroup>

        <SFormGroup>
          {/* <Label for="email">Email:</Label> */}
          <Input
            type="email"
            name="email"
            id="email"
            value={form.email || ""}
            onChange={handleChange}
            placeholder="email:"
            required
            className="text-lowercase"
          />
        </SFormGroup>
        <SFormGroup>
          {/* <Label for="address">Address:</Label> */}
          <Input
            type="text"
            name="address"
            value={form.address || ""}
            onChange={handleChange}
            id="address"
            placeholder="address:"
            required
          />
        </SFormGroup>
        <SFormGroup>
          {/* <Label for="value">Requested amount: £"</Label> */}
          <Input
            type="number"
            name="value"
            id="value"
            value={form.value || ""}
            onChange={handleChange}
            placeholder="Requested amount: £"
            min="0.00"
            required
          />
        </SFormGroup>
        <SFormGroup>
          <Button onClick={submit} size="sm" color="info">
            Submit
          </Button>
        </SFormGroup>
      </Col>
    </FormClient>
  );
};

export default Client;

const FormClient = styled(Row)``;
const SFormGroup = styled(FormGroup)``;
