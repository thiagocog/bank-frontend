import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap');

 *{
     margin:0;
     padding:0;
     outline:0;
     ol,
ul {
  list-style: none;
}
 }

 p{
   font-family: 'Roboto', sans-serif;
 }

 h1,h2,h3,h4,h5,h6{
   font-family: "Montserrat", serif;
 }


 #root {
     display: flex;
     flex-direction: column;
     height: 100vh;
 }

 $primary: #42145f;
`;

export default GlobalStyle;
