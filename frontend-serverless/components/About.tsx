import styled from "styled-components";
import { ReactElement, FC } from "react";

export const About: FC = (): ReactElement => {
  return (
    <StyledAbout>
      <LayoutGrid>
        <div className="left">
          <h2>UNDER DEVELOPMENT...</h2>
        </div>
        <div className="right">
          <h2>UNDER DEVELOPMENT...</h2>
        </div>
      </LayoutGrid>
    </StyledAbout>
  );
};

const StyledAbout = styled("div")`
  height: 100%;
`;

const LayoutGrid = styled("div")`
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    background-color: blue;
  }

  .right {
    background-color: purple;
  }

  h2 {
    margin: 0;
  }
`;
