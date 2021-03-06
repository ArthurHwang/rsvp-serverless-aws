import styled from "styled-components";
import Link from "next/link";
import { ReactElement } from "react";
import { useRouter } from "next/router";

export const Footer: React.FC = (): ReactElement => {
  const router = useRouter();

  return (
    <StyledFooter>
      {router.pathname === "/technical" ? (
        <Link href="/">
          <a className="tech">Home</a>
        </Link>
      ) : (
        <Link href="/technical">
          <a className="tech">Tech</a>
        </Link>
      )}
    </StyledFooter>
  );
};

const StyledFooter = styled("footer")`
  a {
    color: ${({ theme }) => theme.accent};

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }
  .tech {
    border-radius: 9px 9px 0 0;
    opacity: 0.5;
    background-color: black;
    position: fixed;
    bottom: 0;
    width: 70px;
    left: 50%;
    text-align: center;
    margin-left: -35px;
    font-size: 1rem;
    z-index: 9999;
    font-weight: 700;
  }
`;
