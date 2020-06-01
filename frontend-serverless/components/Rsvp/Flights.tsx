import styled from "styled-components";
import { ReactElement, FC } from "react";
import { theme } from "../../Global";

export const Flights: FC = (): ReactElement => {
  return (
    <StyledFlights>
      <h2>Check Flight Prices</h2>
      <div className="iframe-cont">
        <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-US&market=US&currency=USD&destinationName='TPE'&directFlights=true&directFlightsIsChecked=true&flightType=return&poweredBySize=0&originName='LAX'"></iframe>
      </div>
    </StyledFlights>
  );
};

const StyledFlights = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.blue};
  overflow: scroll;
  display: grid;
  grid-template-rows: auto 1fr;

  .iframe-cont {
    height: 410px;
  }

  @media (max-width: 1445px) {
    overflow: initial;
    height: 500px;
    padding: 2rem;
  }

  @media (max-width: 577px) {
    height: 580px;
  }

  @media (max-width: 490px) {
    height: 500px;
  }

  @media (max-width: 465px) {
    height: 540px;
  }

  h2 {
    padding: 2rem 4rem 0;
    height: 20%;
    height: 6rem;

    @media (max-width: 1445px) {
      padding: 0;
      height: auto;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    padding: 2rem 4rem;
    @media (max-width: 1445px) {
      padding: 0;
    }
  }
`;
