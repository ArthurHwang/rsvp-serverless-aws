import styled from 'styled-components';
import { RiMenu3Line } from 'react-icons/ri';

export const Nav: React.FC = () => {
  return (
    <>
      <StyledNav>
        <h3>Carol</h3>
        <h3>Arthur</h3>
      </StyledNav>
      <NavMobile>
        <RiMenu3Line style={{ fontSize: '3rem' }} />
      </NavMobile>
    </>
  );
};

const StyledNav = styled('nav')`
  position: fixed;
  left: 2rem;
  top: 2rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavMobile = styled('nav')`
  position: fixed;
  left: 2rem;
  top: 2rem;

  @media (min-width: 769px) {
    display: none;
  }
`;
