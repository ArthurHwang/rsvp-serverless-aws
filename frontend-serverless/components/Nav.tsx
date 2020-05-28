import styled from 'styled-components';
import Link from 'next/link';
import { RiMenu3Line } from 'react-icons/ri';

export const Nav: React.FC = () => {
  return (
    <>
      <StyledNav>
        <div>
          <Link href="/">
            <a>CAROL & Arthur</a>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <a>ABOUT</a>
          </Link>
        </div>
        <div>
          <Link href="/where">
            <a>WHERE</a>
          </Link>
          <div>
            <Link href="/rsvp">
              <a>RSVP</a>
            </Link>
          </div>
        </div>
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
  z-index: 9999;

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
