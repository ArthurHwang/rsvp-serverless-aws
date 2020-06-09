import styled from "styled-components";
import Head from "next/head";
import { VenueLocation } from "../components/Venue/VenueLocation";
import { VenueAbout } from "../components/Venue/VenueAbout";
import { NextPage } from "next";

const VenuePage: NextPage = () => {
  return (
    <StyledVenue>
      <Head>
        <title>Arthur and Carol - Venue</title>
        <meta name="description" content="Carol and Arthur - Venue" />
        <link rel="canonical" href="https://carolandarthur.com/venue" />
      </Head>
      <VenueLocation />
      <VenueAbout />
    </StyledVenue>
  );
};

export default VenuePage;

const StyledVenue = styled("div")`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
