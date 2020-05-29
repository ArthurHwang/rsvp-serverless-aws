import styled from 'styled-components';

export const About: React.FC = () => {
  return (
    <StyledAbout>
      <LayoutGrid>
        <div className="left">
          <h2>PHOTO</h2>
        </div>
        <div className="right">
          <h2>DESCRIPTORY</h2>
        </div>
      </LayoutGrid>
    </StyledAbout>
  );
};

const StyledAbout = styled('div')`
  height: 100%;
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