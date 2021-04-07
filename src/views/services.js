import React, { useState, useEffect, useCallback } from "react";
import { getBankAllServices } from "../services/serv.service";
import { Row, Col, Container } from "reactstrap";
import CardItem from "../components/services/card_item";
import styled from "styled-components";
import Loading from "../components/loading/index";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const getServices = useCallback(() => {
    setLoading(true);
    getBankAllServices()
      .then((res) => {
        setServices(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("error alert");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    getServices();
  }, [getServices]);

  //mount services
  const mappingServices = (services) =>
    services.map((item, i) => (
      <Col container md="6" xl="6" sm="12" xs="12" key={i} className="mb-4">
        <CardItem item={{ ...item, status: true }} />
      </Col>
    ));

  return (
    <div>
      <SJumbotron>
        <div className="jumbo">
          <SContainer>
            <div className="info_bg">
              <div className="text_bg">
                <h1>TechnoBank</h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Illum magni facere architecto fugiat iste at error laudantium
                  voluptatum consequatur deserunt eum voluptatem illo fugit,
                  quam nulla adipisci, in ipsa repudiandae! Iure sapiente
                  praesentium, soluta officiis vero ullam autem in facilis
                  cumque nam quas maxime assumenda illum, et porro eveniet.
                  Architecto.
                </p>
              </div>
              <div className="img_bg">
                <img src="/images/bg_md.svg" alt="" />
              </div>
            </div>
          </SContainer>
          <Boxes>{loading ? <Loading /> : mappingServices(services)}</Boxes>
        </div>
      </SJumbotron>
    </div>
  );
};

export default Services;

const SJumbotron = styled(Row)`
  max-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0 0 72px; // because footer has 72px
  overflow: hidden;
  @media (max-width: 1059px) {
    margin: 0 auto;
  }
`;
const Boxes = styled.div`
  max-width: 100%;
  flex-wrap: wrap;
  display: flex;
`;

const SContainer = styled(Container)`
display: flex;
  }
  .info_bg {
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
    p {
      width: 100%;
      text-align: justify;
    }

    .text_bg{
      width: 50%;
      padding: 10px;
    }
    .img_bg {
      display: flex;
      width: 50%;
      justify-content: center;
    }
  }
  //Responsive
  @media (max-width: 991px) {
    img {
     display: none;
     }
    .img_bg {
      display: none;
    }
    .text_bg{
    min-width: 100%;
    margin-top: 20px;
    text-align: justify;
    align-items: center;
  }
  h1{
      text-align: center;
    }
`;
