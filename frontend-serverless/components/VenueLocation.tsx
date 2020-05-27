import styled from 'styled-components';

export const VenueLocation: React.FC = () => {
  return (
    <StyledVenue>
      <h2>Venue Location......</h2>
    </StyledVenue>
  );
};

const StyledVenue = styled('div')`
  height: 500px;
  background-color: teal;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }
`;
