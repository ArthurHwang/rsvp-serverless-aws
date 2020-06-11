import styled from "styled-components";
import { Hero } from "../components/Home/Hero";
import { Card } from "../components/Home/Card";
import { NextPage } from "next";

const HomePage: NextPage = () => {
  return (
    <StyledHome>
      <Hero />
      <Card />
    </StyledHome>
  );
};

export default HomePage;

const StyledHome = styled("div")`
  display: grid;
  grid-template-columns: 65% 35%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
