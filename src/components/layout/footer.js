import styled, { keyframes } from "styled-components";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { VscTriangleRight } from "react-icons/vsc"



const Footer = () => {
  return (
    <>
      <SVscTriangleRight />
      <Sfooter>
        {/* <Masc /> */}
        
        <div className="footer_icons">
          <a href="https://www.facebook.com" target="_blank">
            {" "}
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank">
            {" "}
            <FaInstagram />
          </a>
          <a href="https://www.twitter.com" target="_blank">
            {" "}
            <FaTwitter />
          </a>
          <a href="https://www.gitlab.com" target="_blank">
            {" "}
            <FaGitlab />
          </a>
          <a href="https://www.linkedin.com" target="_blank">
            {" "}
            <FaLinkedin />
          </a>
        </div>
      </Sfooter>
    </>
  );
};

export default Footer;



const Sfooter = styled.footer`
  z-index: 2;
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

  @media (min-width: 1300px) {
    animation: slideBack .4s forwards;
  }
  


  :hover {
    animation: slideRight .4s forwards;
  }

  

  @keyframes slideRight {
    from {
      opacity: 0;
      left: -40px;
    }
    to {
      opacity: 1;
      left: 0px;
    }
  }

  @keyframes slideBack {
    from {
      opacity: 1;
      left: 0px;
    }
    to {
      opacity: 0;
      left: -40px;
    }
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
  @media (max-width: 1300px) {
    min-width: 100%;
    height: 72px;
    position: relative;
    justify-content: center;
    align-items: center;
    opacity: 1;
    margin-top: 40px;

    :hover {
      animation: none;
    }

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
`


const SVscTriangleRight = styled(VscTriangleRight)`
  position: fixed;
  z-index: 1;
  left: 6px;
  top: 380px;
  color: #62145f;

  @media (max-width: 1300px) {
    display: none;
  }
`
