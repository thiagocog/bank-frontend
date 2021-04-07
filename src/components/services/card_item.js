import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
} from "reactstrap";
import styled from "styled-components";

const CardItem = (props) => {
  const { name, id, status, manager } = props.item;

  const IsService = ({ isFalse }) => {
    if (isFalse) {
      return (
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          Manager: {manager}
        </CardSubtitle>
      );
    } else {
      return <small>Other</small>;
    }
  };

  return (
    <SContainer container-fluid>
      <SCard>
        <SCardBody size="md">
          <CardTitle tag="h4">{name}</CardTitle>
          <IsService isFalse={status} />
          <Button tag={Link} to={`/details/${id}`} size="sm" color="info">
            More information...
          </Button>
        </SCardBody>
      </SCard>
    </SContainer>
  );
};
export default CardItem;

const SCard = styled(Card)`
  max-width: 100%;
  background-color: rgb(206, 59, 87, 0.1);
  color: #42145f;
  margin-top: 20px;
  justify-content: center;

  :hover {
    background-color: rgb(206, 59, 87, 0.3);
    transition: 0.4s;
  }
`;

const SContainer = styled(Container)`
  max-width: 100%;
  display: flex;
  justify-content: center;
`;

const SCardBody = styled(CardBody)`
  min-width: 500px;
  @media (max-width: 549px) {
    min-width: 300px !important;
  }
`;
