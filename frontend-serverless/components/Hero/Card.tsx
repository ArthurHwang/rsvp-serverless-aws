import { FC, ReactElement } from "react";
import MdHeart from "react-ionicons/lib/MdHeart";
import Link from "next/link";
import styled from "styled-components";
import dynamic from "next/dynamic";

// dynamic import to solve SSR issue
const DateCountdown = dynamic(() => import("react-date-countdown-timer"), {
  ssr: false,
});

export const Card: FC = (): ReactElement => {
  return (
    <StyledCard className="fancy-border right wedding-bg">
      <h2>She said I do </h2>
      <MdHeart fontSize="45px" color="red" beat={true} />{" "}
      <h2>I hope you do too</h2>
      <p className="friends">To our friends and family:</p>
      <p>Celebrate with us on August 28, 2020</p>
      <p>@ The Regents Hotel in Taipei, Taiwan </p>
      {/* 
      //@ts-ignore */}
      <DateCountdown
        // @ts-ignore
        dateTo="August 28, 2020 00:00:00 GMT+03:00"
        numberOfFigures={5}
      />
      <p className="rsvp">
        Please{" "}
        <Link href="/rsvp">
          <a className="link">RSVP</a>
        </Link>{" "}
        to let us know your coming
      </p>
    </StyledCard>
  );
};

const StyledCard = styled("div")`
  background-color: #bbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;

  h2:last-of-type {
    margin-bottom: 2rem;
  }

  p {
    font-size: 2rem;
    text-align: center;
    margin: 1rem;
    height: 4rem;
  }

  .odometer-block {
    margin-bottom: 1rem;

    span {
      font-size: 1.4rem;
      font-weight: 700;
    }

    & > * {
      display: block;
    }
  }

  .fancy-border {
    border: 4rem solid #b88846;
    border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E")
      25;
  }

  @media (max-width: 1200px) {
    padding: 4rem 2rem;

    .odometer-block {
      margin-top: 2rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    p {
      margin: 0;
      height: initial;
      font-size: 1.4rem;
      text-align: left;
    }

    p.friends {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    p.rsvp {
      margin-top: 2rem;
    }
  }
`;
