import styled from "styled-components";
import { ReactElement, FC } from "react";
import { theme } from "../../Global";

export const Flights: FC = (): ReactElement => {
  return (
    <StyledFlights>
      <h2>Check Flight Prices:</h2>
      <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-US&market=US&currency=USD&destinationName='TPE'&directFlights=true&directFlightsIsChecked=true&flightType=return&poweredBySize=0&originName='LAX'"></iframe>
    </StyledFlights>
  );
};

const StyledFlights = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.blue};
  overflow: hidden;

  h2 {
    padding: 2rem 4rem 0;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    padding: 2rem 4rem;
  }
`;
