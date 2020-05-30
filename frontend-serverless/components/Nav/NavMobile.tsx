import { FC, ReactElement } from "react";
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";

type Props = {
  path: string;
  scrolled: boolean;
};

export const NavMobile: FC<Props> = ({ scrolled, path }): ReactElement => {
  return (
    <StyledNavMobile scrolled={scrolled} path={path}>
      <RiMenu3Line style={{ fontSize: "3rem" }} />
    </StyledNavMobile>
  );
};

const StyledNavMobile = styled("nav")<{ path: string; scrolled: boolean }>`
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 9999;
  color: ${({ theme }) => theme.primary};
  display: none;

  @media (max-width: 768px) {
    display: ${(props) =>
      props.path === "/" && props.scrolled === false ? "none" : "block"};
  }
`;
