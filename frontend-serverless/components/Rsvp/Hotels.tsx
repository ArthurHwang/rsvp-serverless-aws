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
          <iframe
            frameBorder="0"
            src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=HotelSearchWidget&locale=en-US&market=US&currency=USD&destinationName='Taipei'&buttonColour=dawn&poweredBySize=0&fontColour=%23aaa"
          ></iframe>
        )}
      </div>
    </StyledHotels>
  );
};

const StyledHotels = styled("div")`
  height: 100%;
  /* background-color: ${({ theme }) => theme.bg.aqua}; */
  /* background-color: ${({ theme }) => theme.bg.aqua}; */
  background-color: #323E48;
  
  display: grid;
  grid-template-rows: auto 1fr;
  /* overflow-y: auto; */

  .iframe-cont {
    height: 100%;
  }

  @media (max-width: 1445px) {
    overflow: initial;
    height: 440px;
    padding: 2rem;

    .iframe-cont {
      padding: 0;
    }
  }

  h2 {
    padding: 2rem 2rem 0;
    height: 6rem;
    line-height: 1.2;
    color: ${({ theme }) => theme.black};

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
    padding: 2rem 2rem;

    @media (max-width: 1445px) {
      padding: 0;
    }
  }
`;
