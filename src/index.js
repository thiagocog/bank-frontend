import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "./assets/globalStyled";

import Routers from "./routers";

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Routers />
  </React.Fragment>,
  document.getElementById("root"),
);
