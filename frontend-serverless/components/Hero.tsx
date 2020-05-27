import styled from 'styled-components';

export const Hero: React.FC = () => {
  return (
    <StyledHero>
      <LayoutGrid>
        <div className="left">
          <h2>PHOTO</h2>
        </div>
        <div className="right">
          <h2>DESCRIPTORY</h2>
        </div>
      </LayoutGrid>
    </StyledHero>
  );
};

const StyledHero = styled('div')`
  width: 100vw;
  height: 100vh;
  /* background-color: red; */
`;

const LayoutGrid = styled('div')`
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
    background-color: blue;
  }

  .right {
    background-color: purple;
  }

  h2 {
    margin: 0;

    /* border: 1px solid black; */
  }
`;
