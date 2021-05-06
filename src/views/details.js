import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Jumbotron, FormGroup, Label, Input } from "reactstrap";
import { FaUserPlus, FaRegListAlt } from "react-icons/fa";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from '../store/service/serv.action'
import ReactSwal from "../plugins/swal";
import { createSubscription, removeSubscription } from "../store/client/client.action";




const Details = (props) => {
  document.title = "TechnoBank - Details"

  const { id } = useParams();
  const dispatch = useDispatch()

  const isAdmin = useSelector(state => state.auth.isAdmin)
  const details = useSelector(state => state.service.details)
  const registered = useSelector(state => state.service.details.registered)
  const loading = useSelector(state => state.service.loading)
  const subscriptions = useSelector(state => state.service.details.clients)
  const [form, setForm] = useState({
    value: ""
  })


  const handleChange = (props) => {
    const { name, value } = props.target;
    setForm({
        ...form,
        [name]: value
        // .toLocaleString('en-GB',{style: 'currency', currency: 'GBP'})
    });
  };


  const toggleSubscription = () => {

    if (registered) {
      dispatch(removeSubscription(id, subscriptions[0].id))
        .then(() => {
          ReactSwal.fire({
            icon: 'success',
            title: `Cliente removido do serviço`,
            showConfirmButton: false,
            showCloseButton: true,
          })
        })
        .catch(erro => console.log(`Erro ao remover inscrição no serviço`))

    } else {
      dispatch(createSubscription(id, form))
        .then(() => {
          ReactSwal.fire({
            icon: 'success',
            title: `Cliente cadastrado com sucesso!`,
            showConfirmButton: false,
            showCloseButton: true,
          })
          setForm({
            value: ""
          })
        })
        .catch(erro => console.log(`Erro ao realizar a inscrição no serviço`))
    }
  }


  useEffect(() => {
    dispatch(getDetails(id))
  }, [dispatch, id]);


  const detailsService = ({ name, manager, description }) => (
    <SJumbotron>
      <div className="title_details display-4">
        <h1>{name}</h1>
      </div>

      <h4>{description}</h4>
      <p className="lead">
        <strong>Manager: </strong> {manager}
      </p>
    </SJumbotron>
  );

  const isNotValid = () => form?.value?.length === 0

  const Menu = () => (
    <Navbar expand="md mb-4">
      <SButton
        disabled={!registered ? isNotValid() : ""}
        onClick={toggleSubscription}
        color={registered ? "danger" : "info"}
        size="md"
      >
        {!registered ? (<><SFaUserPlus/>Make your proposal</>) : "Cancel your proposal"} 

      </SButton>
    </Navbar>
  );


  const mountScreen = (details) => (
    <DetailsAll responsive>
      {detailsService(details)}
      {!isAdmin && !registered ? (<> {Menu()}
      <FormGroup>
          {/* <Label for="value">Value</Label> */}
          <Input style={{width: "50%", margin: "0 auto"}} type="number" name="value" id="value" value={form.value || ""} placeholder="Insert your proposal" onChange={handleChange}/>
      </FormGroup> <List clients={details.clients} /> </>) 
      : !isAdmin && registered ? (<>{Menu()} <List clients={details.clients} /></>) : <List clients={details.clients} />
      }
    </DetailsAll>
  );

  return loading ? <Loading /> : mountScreen(details)
  
}

export default Details;

const Navbar = styled.div`
  display: flex;
  margin: 10px 0 30px;
  padding: 10px 0;
  font-family: "Roboto", sans-serif;
  .info_button {
    flex: 1;
  }
`;
const SJumbotron = styled(Jumbotron)`
  margin-bottom: 0;
  text-align: center;
  background-color: #fff;
  .title_details {
    margin-bottom: 20px;
    /* font-size: 700; */
    h1 {
      font-size: 3.5rem;
    }
  }
  h4 {
    line-height: 30px;
    font-family: "roboto", sans-serif;
    font-weight: 300;
    padding: 20px 0;
    color: #17a2b8;
  }
  p {
  }


  @media (min-width: 1200px) {
    h4 {
      padding: 10px 160px 20px;
    }
  }

`

const SButton = styled(Button)`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
`

const DetailsAll = styled.div`
  width: 100%;
  /* margin-left: 72px; */
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    margin-left: 0;
  }
`

const SFaUserPlus = styled(FaUserPlus)`
  margin-right: 6px;
`