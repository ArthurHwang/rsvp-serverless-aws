import { FC, ReactElement } from "react";
import styled from "styled-components";
import { RiMenu3Line } from "react-icons/ri";

type Props = {
  path: string;
};

export const NavMobile: FC<Props> = ({ path }): ReactElement => {
  return (
    <StyledNavMobile path={path}>
      <RiMenu3Line style={{ fontSize: "3rem" }} />
    </StyledNavMobile>
  );
};

const StyledNavMobile = styled("nav")<{ path: string }>`
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 9999;
  color: ${({ theme }) => theme.primary};
  display: none;
  @media (max-width: 768px) {
    display: ${(props) => (props.path === "/" ? "none" : "block")};
  }
`;
