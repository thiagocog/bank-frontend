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
  NavbarText, UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from "reactstrap";
import styled from "styled-components";
import { isAuthenticated } from "../../config/auth";
import { logoutAction } from "../../store/auth/auth.action";
import { useSelector, useDispatch } from 'react-redux';
import history from '../../config/history'



//-----COMPONENT
const Header = () => {

  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggleToolTip = () => setTooltipOpen(!tooltipOpen);
  const isAdmin = useSelector(state => state.auth.isAdmin)
  const user = useSelector(state => state.auth.client)


  const logout = () => {
    dispatch(logoutAction())
  }
  
  //script para selecionar o primeiro e o último nome da usuário
  const nameArray = user?.name?.split(' ')
  let officialName = ''
  nameArray?.forEach((element, index) => {
    if (index === 0 || index === nameArray.length - 1) {
      officialName = officialName + ' ' + element
    }
  })
  
  


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
                    Home
                  </SNavLink>
                </NavItem>
                {isAdmin ? (
                  <NavItem>
                      <SNavLink exact tag={RRDNavLink} activeClassName="active" to="/services">Services</SNavLink>
                  </NavItem>
                ) : ""}
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
            <SNav>
            {isAuthenticated() ? (
              <UncontrolledDropdown nav inNavbar>
                <SDropdownToggle nav caret>
                  <strong className="profile">{officialName}</strong>
                </SDropdownToggle>
                <DropdownMenu>
                {isAdmin ? (
                  <DropdownItem onClick={() => history.push('/users')}>Users</DropdownItem>
                ) : ""}
                  <DropdownItem onClick={() => history.push('/profile')}>Profile</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={logout}>Logout</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            ) : ""}
            </SNav>
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
  padding: 0 16px;
  position: fixed;
  background: linear-gradient(90deg, #42145f 10%, #62145f 200%) !important;
  top: 0;
  width: 100%;
  height: 80px;
  z-index: 100;

  a {
    color: #fff !important;

    .profile {
      margin-right: 0.3rem;
      font-weight: normal;
      font-size: 0.9rem;
    }
  }

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
  max-height: 80px;

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
      color: #fff !important;
    }
  }
`;

const SNavbarText = styled(NavbarText)`
  color: #fff !important;
  margin-right: 150px !important;
  @media (max-width: 769px) {
    display: none;
  } 
`

const SNavLink = styled(NavLink)`
  color: #ccc !important;
  font-size: 18px !important;
  font-family: "Montserrat";
  font-weight: 500;
  text-transform: uppercase;
  padding: 27px 20px !important;

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

const SDropdownToggle = styled(DropdownToggle)`
  display: flex;
  align-items: center;
  letter-spacing: 0.4px;
`
const SNav = styled(Nav)`
  /* background-color: #62145f */
`
