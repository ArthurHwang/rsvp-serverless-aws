import styled from "styled-components";
import { ReactElement, FC, useState, useEffect } from "react";
import { Loading } from "../Loading";

export const Hotels: FC = (): ReactElement => {
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
    <StyledHotels>
      <h2>Check Hotel Prices</h2>
      <div className="iframe-cont">
        {isLoading ? (
          <Loading />
        ) : (
          <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=HotelSearchWidget&locale=en-US&market=US&currency=USD&destinationName='Taipei'&poweredBySize=0"></iframe>
        )}
      </div>
    </StyledHotels>
  );
};

const StyledHotels = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.lightgrey};
  /* overflow-y: scroll; */
  display: grid;
  grid-template-rows: auto 1fr;

  .iframe-cont {
    height: 100%;
  }

  @media (max-width: 1445px) {
    overflow: initial;
    height: 440px;
    padding: 2rem;
  }

  h2 {
    padding: 2rem 4rem 0;
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
