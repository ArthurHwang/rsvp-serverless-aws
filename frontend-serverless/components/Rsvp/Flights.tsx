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
    }, 2000);

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
            frameBorder="0"
            src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=FlightSearchWidget&locale=en-US&buttonColour=lunar&market=US&currency=USD&destinationName='TPE'&directFlights=true&directFlightsIsChecked=true&flightType=return&poweredBySize=0&originName='LAX'"
          ></iframe>
        )}
      </div>
    </StyledFlights>
  );
};

const StyledFlights = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.bg.grey};
  display: grid;
  grid-template-rows: auto 1fr;
  /* overflow-y: auto; */

  .iframe-cont {
    height: 100%;
    padding: 0rem 2rem 0;
  }

  @media (max-width: 1445px) {
    overflow: initial;
    height: 500px;
    padding: 2rem;

    .iframe-cont {
      padding: 0;
    }
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
    padding: 2.5rem 2rem 0;
    line-height: 1.2;
    /* height: 20%; */
    /* height: 6rem; */

    @media (max-width: 1445px) {
      padding: 0;
      height: auto;
    }

    @media (max-width: 580px) {
      padding-top: 2rem;
    }
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0;
    @media (max-width: 1445px) {
      padding: 0;
    }
  }
`;
