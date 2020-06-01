import { Rsvp } from "../components/Rsvp";
import { NextPage } from "next";
import Head from "next/head";
// import { Helmet } from 'react-helmet';
import styled from "styled-components";

const RsvpPage: NextPage = () => {
  return (
    <StyledRSVP>
      <Head>
        <title>Arthur and Carol - RSVP</title>
        <meta content="Carol and Arthur - RSVP" />
        <link rel="canonical" href="https://carolandarthur.com/rsvp" />
      </Head>
      <Rsvp />
    </StyledRSVP>
  );
};

export default RsvpPage;

const StyledRSVP = styled("div")`
  height: 100%;
  /* overflow: hidden;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  } */
`;
