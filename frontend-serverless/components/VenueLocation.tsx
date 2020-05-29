import styled from "styled-components";
import { ReactElement, FC } from "react";

export const VenueLocation: FC = (): ReactElement => {
  return (
    <StyledVenue>
      <h2>Venue Location......</h2>
    </StyledVenue>
  );
};

const StyledVenue = styled("div")`
  height: 100%;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }
`;
