import { FC, ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  path: string;
};

export const NavFull: FC<Props> = ({ path }): ReactElement => {
  return (
    <StyledNav path={path}>
      <div className="title">
        <Link href="/">
          <a>
            CAROL & <span>ARTHUR</span>
          </a>
        </Link>
      </div>
      <div className="subtitle">Covid-19 Survivors</div>
      <div className="subnav">
        <Link href="/about">
          <a className="link">ABOUT</a>
        </Link>
        <Link href="/where">
          <a className="link">WHERE</a>
        </Link>
        <Link href="/rsvp">
          <a className="link">RSVP</a>
        </Link>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled("nav")<{ path: string }>`
  position: fixed;
  top: 5rem;
  z-index: 9999;



  
  a {
    text-transform: uppercase;
  }

  .subtitle {
    color: red;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    height: 1.5rem;
    padding-left: 4rem;
    /* padding-top: 1rem;
    padding-bottom: 1rem; */
    margin-bottom: 2rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 10px 0;
    text-shadow: ${({ theme }) => theme.black} 0px 0px 15px;
  }
  .title {

    span {
      display: block;
      padding-left: 4rem;

    }

    a {
      font-size: 4rem;
      line-height: 40px;
      font-style: italic;
      font-weight: 700;
      padding-left: 2rem;
      color: ${({ theme }) => theme.primary};  
    }
  }

  .subnav a {
    display: block;
    letter-spacing: 4px;
    padding-left: 2rem;
    height: 2.5rem;
    font-size: 1.5rem;
    width: min-content;
    /* color: ${({ theme }) => theme.accent}; */
  }


  @media (max-width: 768px) {
    display: ${(props) => (props.path === "/" ? "block" : "none")};
  }
`;
