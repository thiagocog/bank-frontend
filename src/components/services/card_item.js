import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
  CardFooter,
} from "reactstrap";
import styled from "styled-components";

const CardItem = (props) => {

  const isAdmin = useSelector(state => state.auth.isAdmin)

  const { name, id, status, manager, subscribes, client_subscribe } = props.item

  const IsService = ({ isFalse }) => {
    if (isFalse) {
      return (
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Manager: {manager}
        </CardSubtitle>
      )
    } else {
      return <small>Other</small>;
    }
  };

  return (
    <SContainer>
      <SCard className={client_subscribe && 'subscribed'} >
        <SCardBody size="md">
          <CardTitle tag="h4">{name}</CardTitle>
          <IsService isFalse={status} />
          <Button tag={Link} to={`/details/${id}`} size="sm" color="info">
            More information...
          </Button>
          {/* {isAdmin ? <SCardText>Costumers: {subscribes}</SCardText> : "" } */}

        </SCardBody>
        {isAdmin ? <SCardFooter>Costumers: {subscribes}</SCardFooter> : "" }
        
      </SCard>
    </SContainer>
  )
}

export default CardItem;

const SCard = styled(Card)`
  box-sizing: border-box;
  max-width: 100%;
  color: #42145f;
  margin-top: 20px;
  justify-content: center;
  box-shadow: 2px 2px 6px rgba(206, 59, 87,0.3);

  &.subscribed {
    border-right: 16px solid #62145f;
  }

  :hover {
    background-color: rgb(206, 59, 87, 0.1);
    transition: 0.2s;
  }
`

const SContainer = styled(Container)`
  max-width: 100%;
  display: flex;
  justify-content: center;
`

const SCardBody = styled(CardBody)`
  min-width: 500px;
  @media (max-width: 549px) {
    min-width: 300px !important;
  }
`

const SCardFooter = styled(CardFooter)`
  /* background-color: #fff; */
  /* background-color: rgb(206, 59, 87, 0.1); */
  /* background-color: rgb(66, 20, 95, 0.95); */
  /* color: #fff; */
`

const SCardText = styled(CardText)`
  margin-top: 10px;

`