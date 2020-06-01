import styled from "styled-components";
import { ReactElement, FC } from "react";

export const Hotels: FC = (): ReactElement => {
  return (
    <StyledHotels>
      <h2>Check Hotel Prices:</h2>
      <iframe src="https://widgets.skyscanner.net/widget-server/widgets/iframe?skyscannerWidget=HotelSearchWidget&locale=en-US&market=US&currency=USD&destinationName='Taipei'&poweredBySize=0"></iframe>
    </StyledHotels>
  );
};

const StyledHotels = styled("div")`
  height: 100%;
  background-color: ${({ theme }) => theme.lightgrey};
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
