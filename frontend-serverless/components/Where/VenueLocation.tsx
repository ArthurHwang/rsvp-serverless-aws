import styled from "styled-components";
import { ReactElement, FC } from "react";

export const VenueLocation: FC = (): ReactElement => {
  return (
    <StyledVenueLocation>
      <h2>UNDER DEVELOPMENT...</h2>
    </StyledVenueLocation>
  );
};

const StyledVenueLocation = styled("div")`
  height: 100%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }
`;
