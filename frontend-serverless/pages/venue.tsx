import styled from "styled-components";

import { VenueLocation } from "../components/Venue/VenueLocation";
import { VenueAbout } from "../components/Venue/VenueAbout";
import { NextPage } from "next";

const VenuePage: NextPage = () => {
  return (
    <StyledVenue>
      <VenueLocation />
      <VenueAbout />
    </StyledVenue>
  );
};

export default VenuePage;

const StyledVenue = styled("div")`
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
