import styled from "styled-components";
import { ReactElement, FC } from "react";

export const VenueAbout: FC = (): ReactElement => {
  return (
    <StyledVenueAbout>
      <h2>UNDER DEVELOPMENT...</h2>
    </StyledVenueAbout>
  );
};

const StyledVenueAbout = styled("div")`
  height: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }
`;
