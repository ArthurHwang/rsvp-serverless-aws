import styled from "styled-components";
import { FC, ReactElement } from "react";

export const Rsvp: FC = (): ReactElement => {
  return (
    <StyledHero>
      <LayoutGrid>
        <div className="left">
          <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-GB&market=GB&currency=GBP"></iframe>

          <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=HotelSearchWidget&locale=en-US&market=US&currency=USD"></iframe>
        </div>
        <div className="right">
          <h2>Your mother is a whore</h2>
        </div>
      </LayoutGrid>
    </StyledHero>
  );
};

const StyledHero = styled("div")`
  height: 100%;
`;

const LayoutGrid = styled("div")`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  height: 100%;
  width: 100%;

  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .left {
    background-color: grey;

    iframe {
      height: 400px;
      /* border: none; */
      border: 1px solid black;
      padding: 2rem;
      width: 100%;
    }
  }

  .right {
    background-color: purple;
  }

  h2 {
    margin: 0;
  }
`;
