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
      <p>Come celebrate with us</p>
      <p>@ The Regents Hotel in Taipei, Taiwan</p>
      <StyledDate>
        <div className="month">August</div>
        <div className="day">28</div>
        <div className="year">2021</div>
      </StyledDate>
      {/* 
      //@ts-ignore */}
      <DateCountdown
        // @ts-ignore
        dateTo="August 28, 2021 00:00:00 GMT+03:00"
        numberOfFigures={6}
      />
      <p className="rsvp">
        Please{" "}
        <Link href="/rsvp">
          <a className="link">RSVP</a>
        </Link>{" "}
        in advance
      </p>
      <p className="rsvp">to let us know you are coming</p>
    </StyledCard>
  );
};

const StyledDate = styled("div")`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  justify-items: center;
  grid-gap: 3rem;
  margin: 2rem 0 0;
  line-height: 1.4;
  width: 100%;

  .month {
    justify-self: flex-end;
  }

  .year {
    justify-self: flex-start;
  }

  .month,
  .year {
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    align-self: center;
    text-align: center;
    padding: 0 2rem;
    font-size: 3rem;
  }
  .day {
    font-size: 6rem;
    font-weight: 700;
  }

  @media (max-width: 650px) {
    .month,
    .year {
      font-size: 2.4rem;
    }

    .day {
      font-size: 4.4rem;
    }
  }

  @media (max-width: 515px) {
    grid-gap: 1rem;

    .month,
    .year {
      font-size: 1.6rem;
    }

    .day {
      font-size: 3rem;
    }
  }
`;

const StyledCard = styled("div")`
  background-color: #bbb;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 2rem;
  line-height: 1.4;

  h2 {
    line-height: 4.5rem;

    &:last-of-type {
      margin-bottom: 4rem;
    }
  }

  p {
    font-size: 2rem;
    text-align: center;
    margin: 0;

    &.friends {
      font-size: 3rem;
      margin-bottom: 2rem;
    }
  }

  .odometer-block {
    margin-bottom: 2rem;
    margin-top: 2rem;

    span {
      font-size: 1.8rem;
      font-weight: 700;

      &.sec > * {
        color: red;
      }
    }

    & > * {
      display: block;
    }
  }

  @media (max-width: 1200px) {
    padding: 4rem 2rem;

    .odometer-block {
      margin-top: 2rem;

      span {
        font-size: 1.4rem;
      }
    }

    h2 {
      font-size: 2.4rem;

      &:last-of-type {
        margin-bottom: 2rem;
      }
    }

    p {
      margin: 0;
      height: initial;
      font-size: 1.4rem;
      text-align: left;

      &.friends {
        font-size: 2rem;
      }
    }
  }

  @media (max-width: 416px) {
    & {
      padding: 4rem 0rem;
    }

    h2 {
      font-size: 2.2rem;
    }

    p {
      font-size: 1.2rem;
    }

    .odometer-block span {
      font-size: 1.2rem;
    }
  }

  @media (max-width: 360px) {
    h2 {
      font-size: 2rem;
    }
    p.friends {
      font-size: 1.6rem;
    }
  }

  &.fancy-border {
    border: 4rem solid #b88846;
    border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E")
      25;
  }

  &.wedding-bg {
    background-color: #e5e5e5;
    background-image: url("data:image/svg+xml,%3Csvg width='180' height='180' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M81.28 88H68.413l19.298 19.298L81.28 88zm2.107 0h13.226L90 107.838 83.387 88zm15.334 0h12.866l-19.298 19.298L98.72 88zm-32.927-2.207L73.586 78h32.827l.5.5 7.294 7.293L115.414 87l-24.707 24.707-.707.707L64.586 87l1.207-1.207zm2.62.207L74 80.414 79.586 86H68.414zm16 0L90 80.414 95.586 86H84.414zm16 0L106 80.414 111.586 86h-11.172zm-8-6h11.173L98 85.586 92.414 80zM82 85.586L87.586 80H76.414L82 85.586zM17.414 0L.707 16.707 0 17.414V0h17.414zM4.28 0L0 12.838V0h4.28zm10.306 0L2.288 12.298 6.388 0h8.198zM180 17.414L162.586 0H180v17.414zM165.414 0l12.298 12.298L173.612 0h-8.198zM180 12.838L175.72 0H180v12.838zM0 163h16.413l.5.5 7.294 7.293L25.414 172l-8 8H0v-17zm0 10h6.613l-2.334 7H0v-7zm14.586 7l7-7H8.72l-2.333 7h8.2zM0 165.414L5.586 171H0v-5.586zM10.414 171L16 165.414 21.586 171H10.414zm-8-6h11.172L8 170.586 2.414 165zM180 163h-16.413l-7.794 7.793-1.207 1.207 8 8H180v-17zm-14.586 17l-7-7h12.865l2.333 7h-8.2zM180 173h-6.613l2.334 7H180v-7zm-21.586-2l5.586-5.586 5.586 5.586h-11.172zM180 165.414L174.414 171H180v-5.586zm-8 5.172l5.586-5.586h-11.172l5.586 5.586zM152.933 25.653l1.414 1.414-33.94 33.942-1.416-1.416 33.943-33.94zm1.414 127.28l-1.414 1.414-33.942-33.94 1.416-1.416 33.94 33.943zm-127.28 1.414l-1.414-1.414 33.94-33.942 1.416 1.416-33.943 33.94zm-1.414-127.28l1.414-1.414 33.942 33.94-1.416 1.416-33.94-33.943zM0 85c2.21 0 4 1.79 4 4s-1.79 4-4 4v-8zm180 0c-2.21 0-4 1.79-4 4s1.79 4 4 4v-8zM94 0c0 2.21-1.79 4-4 4s-4-1.79-4-4h8zm0 180c0-2.21-1.79-4-4-4s-4 1.79-4 4h8z' fill='%238e7700' fill-opacity='0.16' fill-rule='evenodd'/%3E%3C/svg%3E");
  }
`;
