import styled from "styled-components";
import { ReactElement, FC } from "react";

export const VenueAbout: FC = (): ReactElement => {
  return (
    <StyledVenueAbout>
      <h2>Venue Information</h2>

      <h3>Regents Hotel</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti
        aliquam ullam ipsam reiciendis! Aut qui iste ab id tempora dolorem
        tenetur accusantium in et, iusto vero cupiditate excepturi dolor
        perferendis alias sunt natus numquam voluptatum asperiores fugit, eaque
        eligendi voluptate. Porro quod consectetur corporis distinctio assumenda
        atque repudiandae, necessitatibus incidunt doloribus repellendus,
        reprehenderit quia rem officiis! Culpa, nobis consectetur error, fugit
        sapiente cum aliquam unde sunt, ea pariatur eligendi? Eos excepturi ad,
        debitis fugit maxime nostrum, recusandae eligendi cumque itaque rem
        animi voluptatem aliquam consequatur! Blanditiis sapiente, maiores fugit
        dicta quidem hic harum itaque nisi eos tempora animi atque dolorum
        eligendi, officiis omnis esse architecto id soluta est eum officia.
        Dolorum laborum, dolor qui tempore molestias perspiciatis accusantium
        optio odit velit inventore quas fugiat impedit nihil quidem, cupiditate
        ea fuga a! Quas dicta unde aspernatur, illum doloribus qui quisquam
        dolores hic quod, sequi beatae possimus facere commodi in odit, incidunt
        voluptates perferendis quas dolor excepturi, corrupti, ratione illo
        assumenda harum nobis. Amet, accusamus temporibus totam quisquam iure
        fuga labore, ipsam saepe commodi quasi earum! Ab velit architecto porro
        consequatur? Asperiores quae ipsa nam, labo
      </p>

      <img
        src={require("./images/taipei-hero.jpg?webp")}
        alt="carol and arthur"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = "./images/IMG_4889_vignette.jpg";
        }}
      />
      <img
        src={require("./images/gallery-10-1920x1080.jpg?webp")}
        alt="carol and arthur"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = "./images/IMG_4889_vignette.jpg";
        }}
      />
      <img
        src={require("./images/gallery-10-1920x1080.jpg?webp")}
        alt="carol and arthur"
        onError={(e: any) => {
          e.target.onerror = null;
          e.target.src = "./images/IMG_4889_vignette.jpg";
        }}
      />

      <h2>Food</h2>

      <h3>Family Style</h3>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque corrupti
        aliquam ullam ipsam reiciendis! Aut qui iste ab id tempora dolorem
        tenetur accusantium in et, iusto vero cupiditate excepturi dolor
        perferendis alias sunt natus numquam voluptatum asperiores fugit, eaque
        eligendi voluptate. Porro quod consectetur corporis distinctio assumenda
        atque repudiandae, necessitatibus incidunt doloribus repellendus,
        reprehenderit quia rem officiis! Culpa, nobis consectetur error, fugit
        sapiente cum aliquam unde sunt, ea pariatur eligendi? Eos excepturi ad,
        debitis fugit maxime nostrum, recusandae eligendi cumque itaque rem
        animi voluptatem aliquam consequatur! Blanditiis sapiente, maiores fugit
        dicta quidem hic harum itaque nisi eos tempora animi atque dolorum
        eligendi, officiis omnis esse architecto id soluta est eum officia.
        Dolorum laborum, dolor qui tempore molestias perspiciatis accusantium
        optio odit velit inventore quas fugiat impedit nihil quidem, cupiditate
        ea fuga a! Quas dicta unde aspernatur, illum doloribus qui quisquam
        dolores hic quod, sequi beatae possimus facere commodi in odit, incidunt
        voluptates perferendis quas dolor excepturi, corrupti, ratione illo
        assumenda harum nobis. Amet, accusamus temporibus totam quisquam iure
        fuga labore, ipsam saepe commodi quasi earum! Ab velit architecto porro
        consequatur? Asperiores quae ipsa nam, labo
      </p>
    </StyledVenueAbout>
  );
};

const StyledVenueAbout = styled("div")`
  height: 100%;
  background-color: teal;
  padding: 6rem;
  overflow-y: scroll;

  img {
    width: 100%;
  }

  @media (max-width: 1446px) {
    overflow-y: initial;
    height: auto;
  }
`;
