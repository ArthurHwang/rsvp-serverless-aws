// import { Rsvp } from "../components/Rsvp";
import { NextPage } from "next";
import { Contact } from "../components/Rsvp/Contact";
import { Flights } from "../components/Rsvp/Flights";
import { Hotels } from "../components/Rsvp/Hotels";
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

      <div className="left">
        <Contact />
      </div>

      <div className="right">
        <Flights />
        <Hotels />
      </div>
      {/* <Rsvp /> */}
    </StyledRSVP>
  );
};

export default RsvpPage;

const StyledRSVP = styled("div")`
  height: 100%;
  overflow: hidden;
  display: grid;
  grid-template-columns: 60% 40%;
  height: 100%;
  width: 100%;

  .left {
    height: 100%;
    overflow: scroll;
    background-color: ${({ theme }) => theme.black};

    @media (max-width: 1445px) {
      height: auto;
    }
  }

  .right {
    width: auto;
    height: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
