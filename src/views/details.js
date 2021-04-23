import { useEffect } from "react";
import { useParams } from "react-router";
import { Button, Jumbotron } from "reactstrap";
import { FaUserPlus, FaRegListAlt } from "react-icons/fa";
import Loading from "../components/loading/index";
import List from "../components/clientList/index";
import Client from "../components/clientService/index";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from '../store/service/serv.action'




const Details = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch()
  // const { history } = props;
  // const [isClient, setClient] = useState(true);

  const isAdmin = useSelector(state => state.auth.isAdmin)
  const details = useSelector(state => state.service.details)
  const registered = useSelector(state => state.service.details.registered)
  const loading = useSelector(state => state.service.loading)



  // const getDetails = useCallback(async () => {
  //   try {
  //     setLoading(true);
  //     const res = await getServiceDetails(id);
  //     setDetails(res.data);
  //     setLoading(false);
  //     //try error
  //   } catch (error) {
  //     console.log("error catch", error);
  //     history.push("/?error=404");
  //   }
  // }, [id, history]); //something wrong


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

  const Menu = () => (
    <Navbar expand="md mb-4">
      {/* <div className="info_button">
        {!registered ? "Make your proposal: " : "Cancel your proposal:"}
      </div> */}
      <SButton
        onClick={() => {}}
        color={registered ? "danger" : "info"}
        size="md"
      >
        {!registered ? "Do your proposal " : "Cancel your proposal"} 

        {/* (
          <>
            <FaUserPlus />
          </>
        ) : (
          <>
            <FaRegListAlt />
          </>
        ) */}
      </SButton>
    </Navbar>
  );

  // const mountScreen = (details) => (
  //   <DetailsAll responsive>
  //     {detailsService(details)}
  //     {Menu()}

  //     {isClient ? (
  //       <Client id={id} update={setUpdate} isForm={setClient} />
  //     ) : (
  //       <List clients={details.clients} update={setUpdate} />
  //     )}
  //   </DetailsAll>
  // );

  const mountScreen = (details) => (
    <DetailsAll responsive>
      {detailsService(details)}
      {!isAdmin ? Menu() : <List clients={details.clients} />}

      {/* {isClient ? (
        <Client id={id} update={setUpdate} isForm={setClient} />
      ) : (
        
      )} */}
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
