import { FC, ReactElement, useState, useEffect } from "react";
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";

type Props = {
  path: string;
  scrolled: boolean;
};

export const NavMobile: FC<Props> = ({ scrolled, path }): ReactElement => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  useEffect(() => {
    const handleScroll = () => {
      setClicked(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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
        <StyledWindow>asdf</StyledWindow>
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
  background-color: black;
  height: 100%;
  color: white;
`;

const StyledWindowContainer = styled("div")<WindowProps>`
  width: 100%;
  padding: 2rem;
  top: 4rem;
  position: fixed;
  height: 400px;
  transition: z-index 0.5s;
  transition: opacity 0.5s;
  /* transform: ${(props) =>
    props.clicked ? "translateX(0)" : "translateX(-500px)"}; */
  /* transform: translateX(500px); */
  z-index: ${(props) => (props.clicked ? "9999" : "-1")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
`;
