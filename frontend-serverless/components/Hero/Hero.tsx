import { ReactElement, FC } from "react";
import styled from "styled-components";
import { Carousel } from "./Carousel";
import { Card } from "./Card";

export const Hero: FC = (): ReactElement => {
  return (
    <StyledHero>
      <Carousel />
      <Card />
    </StyledHero>
  );
};

const StyledHero = styled("div")`
  overflow: hidden;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
  width: 100%;

  @media (max-width: 1200px) {
    overflow: initial;
    display: block;
  }
`;
