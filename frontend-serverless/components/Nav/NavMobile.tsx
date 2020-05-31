import { FC, ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";
import Link from "next/link";
import { NavMobileHeader } from "./NavMobileHeader";
import { useRouter } from "next/router";
type Props = {
  path: string;
  scrolled: boolean;
};

export const NavMobile: FC<Props> = ({ scrolled, path }): ReactElement => {
  const [clicked, setClicked] = useState(false);
  const router = useRouter();
  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      setClicked(false);
    };

    window.addEventListener("scroll", handleScroll);
    router.events.on("routeChangeStart", handleScroll);

    return () => {
      router.events.off("routeChangeStart", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clicked]);

  return (
    <>
      <StyledNavMobile
        scrolled={scrolled}
        path={path}
        clicked={clicked}
        onClick={handleClick}
      >
        <RiMenu3Line className="hamburger" style={{ fontSize: "3rem" }} />
      </StyledNavMobile>
      <StyledWindowContainer clicked={clicked}>
        <div className="overlay"></div>
        <StyledWindow>
          <div className="mobile-nav-top">
            <NavMobileHeader />
          </div>
          <div>
            <Link href="/">
              <a className="link">HOME</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a className="link">ABOUT</a>
            </Link>
          </div>
          <div>
            <Link href="/where">
              <a className="link">WHERE</a>
            </Link>
          </div>
          <div>
            <Link href="/rsvp">
              <a className="link">RSVP</a>
            </Link>
          </div>
        </StyledWindow>
      </StyledWindowContainer>
    </>
  );
};

type StyledProps = {
  scrolled: boolean;
  path: string;
  clicked: boolean;
};

type WindowProps = {
  clicked: boolean;
};

const StyledNavMobile = styled("nav")<StyledProps>`
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 9999;
  color: ${({ theme }) => theme.primary};
  display: none;

  .hamburger {
    transition: transform 0.5s;
    color: ${(props) =>
      props.clicked ? props.theme.secondaryAccent : props.theme.yellow};
    transform: ${(props) => (props.clicked ? "rotate(270deg)" : "")};
  }

  @media (max-width: 1445px) {
    display: ${(props) =>
      props.path === "/" && props.scrolled === false ? "none" : "block"};
  }
`;

const StyledWindow = styled("div")`
  width: 100%;
  height: 100%;
  color: white;
  padding: 2rem;
  z-index: 10;

  div {
    margin-bottom: 1rem;
    text-align: center;

    &:last-of-type,
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;

const StyledWindowContainer = styled("div")<WindowProps>`
  width: 100%;
  top: 7rem;
  position: fixed;
  transition: z-index 0.5s, opacity 0.5s;
  z-index: ${(props) => (props.clicked ? "9999" : "-1")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  .overlay {
    position: absolute;
    background: black;
    background: rgba(0, 0, 0, 0.8);
    left: 0;
    top: 0;
    z-index: -1;
    right: 0;
    bottom: 0;
    filter: blur(4px);
    -o-filter: blur(4px);
    -ms-filter: blur(4px);
    -moz-filter: blur(4px);
    -webkit-filter: blur(4px);
  }
`;
