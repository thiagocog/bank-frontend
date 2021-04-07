import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import { getServiceDetails } from "../services/serv.service";
import { Button, Jumbotron } from "reactstrap";
import { FaUserPlus, FaRegListAlt } from "react-icons/fa";

import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";
import styled from "styled-components";

const Details = (props) => {
  const { id } = useParams();
  const { history } = props;

  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState({});
  const [update, setUpdate] = useState(false);
  const [isClient, setClient] = useState(true);

  const getDetails = useCallback(async () => {
    try {
      setLoading(true);
      const res = await getServiceDetails(id);
      setDetails(res.data);
      setLoading(false);
      //try error
    } catch (error) {
      console.log("error catch", error);
      history.push("/?error=404");
    }
  }, [id, history]); //something wrong

  useEffect(() => {
    getDetails();
    setUpdate(false);
  }, [getDetails, update]);

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

  const Menu = () => (
    <Navbar expand="md mb-4">
      <div className="info_button">
        {isClient ? "Insert your info: " : "All clients in this service:"}
      </div>
      <SButton
        onClick={() => setClient(!isClient)}
        color={!isClient ? "info" : "info"}
        size="md"
      >
        {!isClient ? (
          <>
            <FaUserPlus />
          </>
        ) : (
          <>
            <FaRegListAlt />
          </>
        )}
      </SButton>
    </Navbar>
  );

  const mountScreen = (details) => (
    <DetailsAll responsive>
      {detailsService(details)}
      {Menu()}

      {isClient ? (
        <Client id={id} update={setUpdate} isForm={setClient} />
      ) : (
        <List clients={details.clients} update={setUpdate} />
      )}
    </DetailsAll>
  );

  return loading ? <Loading /> : mountScreen(details);
};

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
  text-align: center;
  background-color: #fff;
  .title_details {
    margin-bottom: 20px;
    font-size: 700;
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
`;

const SButton = styled(Button)`
  display: flex;
  align-items: center;
`;
const DetailsAll = styled.div`
  width: 100%;
  margin-left: 72px;
  align-items: center;
  justify-content: center;
  @media (max-width: 930px) {
    margin-left: 0;
  }
`;
