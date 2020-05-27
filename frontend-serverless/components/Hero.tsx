import styled from 'styled-components';

export function Hero() {
  return (
    <StyledHero>
      <LayoutGrid>
        <h2>hi</h2>
        <h2>hi</h2>
      </LayoutGrid>
    </StyledHero>
  );
}

const StyledHero = styled('div')`
  width: 100vw;
  height: 100vh;
  background-color: red;
`;

const LayoutGrid = styled('div')`
  display: grid;
  grid-template-columns: 2fr 1fr;

  h2 {
    border: 1px solid black;
  }
`;
