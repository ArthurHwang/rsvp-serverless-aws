import styled from "styled-components";
// import { Meta } from './Meta';
// import { Nav } from './Nav/Nav';
import Link from "next/link";
import { ReactElement } from "react";

// type Props = {
//   children: React.ReactNode;
// };

export const Footer: React.FC = (): ReactElement => {
  return (
    <StyledFooter>
      <Link href="/technical">
        <a className="tech">Tech</a>
      </Link>
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  .tech {
    border-radius: 9px 9px 0 0;
    opacity: 0.5;
    background-color: darkgrey;
    position: fixed;
    bottom: 0;
    width: 70px;
    left: 50%;
    text-align: center;
    margin-left: -35px;
    font-size: 1rem;
    font-weight: 700;
  }
`;
