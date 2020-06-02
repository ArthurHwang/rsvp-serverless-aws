import styled from "styled-components";
import { ReactElement, FC, useState, useEffect } from "react";
import { Loading } from "../Loading";

export const Flights: FC = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);

  const hideSpinner = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const frameTimer = setTimeout(() => {
      hideSpinner();
    }, 1000);

    return () => clearTimeout(frameTimer);
  }, []);

  return (
    <StyledFlights>
      <h2>Check Flight Prices</h2>

      <div className="iframe-cont">
        {isLoading ? (
          <Loading />
        ) : (
          <iframe
            onLoad={hideSpinner}
            frameBorder="0"
            src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-US&market=US&currency=USD&destinationName='TPE'&directFlights=true&directFlightsIsChecked=true&flightType=return&poweredBySize=0&originName='LAX'"
          ></iframe>
        )}
      </div>
    </StyledFlights>
  );
};

const StyledFlights = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.blue};
  /* overflow-y: scroll; */
  display: grid;
  grid-template-rows: auto 1fr;

  .iframe-cont {
    height: 100%;
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

  @media (max-width: 390px) {
    height: 570px;
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
