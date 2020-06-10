import { NextPage } from "next";
import { Contact } from "../components/Rsvp/Contact";
import { Flights } from "../components/Rsvp/Flights";
import { Hotels } from "../components/Rsvp/Hotels";
import Head from "next/head";
import styled from "styled-components";

const RsvpPage: NextPage = () => {
  return (
    <StyledRSVP>
      <Head>
        <title>Arthur and Carol - RSVP</title>
        <meta name="description" content="Carol and Arthur - RSVP" />
        <link rel="canonical" href="https://carolandarthur.com/rsvp" />
      </Head>
      <div className="left">
        <Contact />
      </div>
      <div className="right">
        <Flights />
        <Hotels />
      </div>
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
    min-height: 100%;
    background-color: ${({ theme }) => theme.black};
  }

  .right {
    width: auto;
    height: 100%;
    display: grid;
    grid-template-rows: 55% 45%;

    @media (max-width: 1445px) {
      height: auto;
      display: block;
    }
  }

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
