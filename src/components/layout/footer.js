import styled from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
  return (
    <Sfooter>
      {/* <Masc /> */}
      <div className="footer_icons">
        <a href="https://www.facebook.com">
          {" "}
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com">
          {" "}
          <FaInstagram />
        </a>
        <a href="https://www.twitter.com">
          {" "}
          <FaTwitter />
        </a>
        <a href="https://www.gitlab.com">
          {" "}
          <FaGitlab />
        </a>
        <a href="https://www.linkedin.com">
          {" "}
          <FaLinkedin />
        </a>
      </div>
    </Sfooter>
  );
};

export default Footer;

const Masc = styled.div`
  position: absolute;
  left: 0;
  top: 80px;
  height: 100%;
  background-color: #fff;
  width: 80px;
  transition-duration: 2s;


  :hover {
    display: none;
    transition-duration: 2s;
  }

  @media (max-width: 1059px) {
    display: none;
  }
`

const Sfooter = styled.footer`
  position: fixed;
  height: 100vh;
  width: 80px;
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #42145f 10%, #62145f 200%);
  left: 0;
  top: 0;
  padding: 11px;
  opacity: 0;
  transition: .2s;


  :hover {
    /* display: flex; */
    /* visibility: hidden; */
    opacity: 1;
  }


  .footer_icons {
    display: flex;
    flex-wrap: wrap;
    max-width: 72px;
    justify-content: center;
    align-items: center;
  }

  a {
    font-size: 30px;
    padding-bottom: 10px;
    color: #fff;
  }
  @media (max-width: 1059px) {
    min-width: 100%;
    height: 72px;
    position: relative;
    justify-content: center;
    align-items: center;
    .footer_icons {
      width: 100%;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
    }

    a {
      font-size: 25px;
      padding: 0px 10px;
    }
  }
`;
