import React from "react";
import styled from "styled-components";
import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main className="container">{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
  flex: 1;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
`;
