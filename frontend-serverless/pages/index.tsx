import styled from "styled-components";
import { Carousel } from "../components/Home/Carousel";
import { Card } from "../components/Home/Card";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <StyledHome>
      <Carousel />
      <Card />
    </StyledHome>
  );
};

export default HomePage;

const StyledHome = styled("div")`
  overflow: hidden;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
