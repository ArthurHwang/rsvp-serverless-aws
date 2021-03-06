import { FC, ReactElement } from "react";
import styled from "styled-components";
import Link from "next/link";

type Props = {
  path: string;
  scrolled: boolean;
};

export const NavFull: FC<Props> = ({ scrolled, path }): ReactElement => {
  return (
    <StyledNav
      scrolled={scrolled}
      path={path}
      className={`${scrolled ? "hidden" : ""}`}
    >
      <div className="title">
        <Link href="/">
          <a>
            CAROL & <span>ARTHUR</span>
          </a>
        </Link>
      </div>
      <div className="subtitle">August 28, 2021</div>
      <div className="subnav">
        <Link href="/">
          <a className="link">HOME</a>
        </Link>

        <Link href="/venue">
          <a className="link">VENUE</a>
        </Link>
        <Link href="/history">
          <a className="link">HISTORY</a>
        </Link>
        <Link href="/rsvp">
          <a className="link">RSVP</a>
        </Link>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled("nav")<{ path: string; scrolled: boolean }>`
  position: fixed;
  top: 5rem;
  z-index: 9999;

  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  .subtitle {
    color: red;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    height: 1.5rem;
    padding-left: 6rem;
    padding-right: 0rem;
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
    margin-bottom: 0.25rem;
  }

  @media (max-width: 1860px) {
    display: none;
  }

  @media (max-width: 1445px) {
    transition: all 0.5s;
    opacity: ${(props) => (props.path === "/" && !props.scrolled ? "1" : "0")};
    display: ${(props) => (props.path !== "/" ? "none" : "block")};

    &.hidden {
      z-index: -1;
    }
  }
`;
