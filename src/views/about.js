import React from "react";
import styled from "styled-components";
import { TitlePage } from '../assets/styled';


const About = () => {
  document.title = "TechnoBank - About"
  return (
    <Box className="history">
      <STitlePage>Our History</STitlePage>
      {/* <h2>Our History</h2> */}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nobis non
        possimus illum officia minus? Debitis enim perspiciatis rerum quibusdam
        suscipit? Rem ipsa illo omnis, maiores voluptatibus nihil beatae
        praesentium, cum provident aliquid, autem totam aspernatur incidunt
        dignissimos tempora officia optio distinctio laboriosam labore eligendi
        reiciendis necessitatibus perspiciatis voluptatum libero! Magnam iure
        voluptatem facilis, accusantium porro aliquid animi fugit! Corporis
        atque ipsa provident quaerat cum nesciunt, neque pariatur, ratione
        labore molestias voluptate architecto perspiciatis ipsam consequatur.
        Cupiditate quod, aliquid sit minus reiciendis, consequuntur fugiat
        perspiciatis ab distinctio doloremque beatae blanditiis aliquam
        voluptate dolores sapiente corrupti, dignissimos explicabo totam? Facere
        omnis quod dicta impedit mollitia aliquid quisquam sapiente ut, suscipit
        sequi, laborum distinctio iure, natus ipsa laudantium exercitationem sit
        dolorem culpa magnam eligendi in! Reprehenderit non laudantium nihil
        quidem perspiciatis mollitia quasi est, quo et fugiat minus eos dolor
        eveniet quis repellendus nostrum cum amet nobis fuga! Earum omnis
        pariatur dolores mollitia minima eligendi animi iusto laudantium fugit?
        Laboriosam officia alias, cum illo explicabo dolores nostrum iusto
        repellat quia libero maiores sed voluptas! Veritatis voluptas, quisquam
        perferendis blanditiis harum sunt beatae reiciendis sint architecto, ab
        velit nulla ad iusto quas eius a at hic temporibus. Animi harum aut
        ratione ea asperiores.
      </p>
    </Box>
  );
};

export default About;

const Box = styled.div`
  width: 70vw;

`
const STitlePage = styled(TitlePage)`
    /* width: 80%; */
    margin: 60px 0 40px;
    padding: 15px 10px;
   font-family: "Montserrat", serif;
`