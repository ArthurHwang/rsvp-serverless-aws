import styled from "styled-components";

import { VenueLocation } from "../components/Where/VenueLocation";
import { VenueAbout } from "../components/Where/VenueAbout";
import { NextPage } from "next";

const WherePage: NextPage = () => {
  return (
    <StyledWhere>
      <VenueLocation />
      <VenueAbout />
    </StyledWhere>
  );
};

export default WherePage;

const StyledWhere = styled("div")`
  overflow: hidden;
  display: grid;
  grid-template-columns: 40% 60%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
