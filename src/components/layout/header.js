import React, { useState } from "react";
import { NavLink as RRDNavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Tooltip,
  NavbarText,
} from "reactstrap";
import styled from "styled-components";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);

  return (
    <header>
      <SNavbar color="dark" dark expand="sm">
        <SNavbarBrand tag={RRDNavLink} to="/" id="logoHeader">
          <Tooltip
            placement="top"
            isOpen={tooltipOpen}
            autohide={false}
            target="logoHeader"
            toggle={toggleToolTip}
          >
            Back to Services
          </Tooltip>
          <div className="logo_menu">
            <img src="/images/logo.svg" alt="" />
          </div>
        </SNavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Container>
          <SCollapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/"
                >
                  Services
                </SNavLink>
              </NavItem>
              <NavItem>
                <SNavLink
                  exact
                  tag={RRDNavLink}
                  activeClassName="active"
                  to="/about"
                >
                  About
                </SNavLink>
              </NavItem>
            </Nav>
          </SCollapse>
        </Container>
        <SNavbarText>
          <h6>Think Different!</h6>
        </SNavbarText>
      </SNavbar>
    </header>
  );
};

export default Header;

const SNavbar = styled(Navbar)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  position: fixed;
  background: linear-gradient(90deg, #42145f 10%, #62145f 200%) !important;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 100;

  @media (max-width: 769px) {
    justify-content: space-between;
  }
`;

const SCollapse = styled(Collapse)`
  background: linear-gradient(
    90deg,
    rgb(66, 20, 95, 0.95) 10%,
    #62145f 200%
  ) !important;
  /* background-color: rgb(66, 20, 95, 0.95); */
  padding-left: 10px;

  @media (max-width: 575px) {
    li {
      .active {
        color: #fff !important;
        padding-left: 8px;
        background-color: rgb(66, 20, 95, 0) !important;
        font-weight: 600;
      }
    }
    a {
      font-family: "Montserrat", serif;
      padding: 10px 0px;
      margin-top: 10px;
    }
  }
`;

const SNavbarText = styled(NavbarText)`
  color: #fff !important;
  margin-right: 150px !important;
  @media (max-width: 769px) {
    display: none;
  } ;
`;

const SNavLink = styled(NavLink)`
  color: #ccc !important;
  font-size: 18px !important;
  font-family: "Montserrat";
  font-weight: 500;
  text-transform: uppercase;
  padding: 26px 0;

  &.active {
    color: #42145f !important;
    background-color: #fff !important;
  }
`;

const SNavbarBrand = styled(NavbarBrand)`
  color: #fff !important;
  .logo_menu {
    background-color: #fff;
    border-radius: 50%;
    margin-right: 50px;
  }
`;
