import { FC, ReactElement } from "react";
import styled from "styled-components";

export const NavMobileHeader: FC = (): ReactElement => {
  return (
    <StyledNav>
      <div className="title">
        <p>CAROL & ARTHUR</p>
      </div>
      <div className="subtitle">Covid-19 Survivors</div>
    </StyledNav>
  );
};

const StyledNav = styled("nav")`
  margin-bottom: 2rem;
  .subtitle {
    color: red;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 4px;
    height: 1.5rem;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.yellow};
    border-radius: 10px 0;
    text-shadow: ${({ theme }) => theme.black} 0px 0px 15px;
    text-align: center;
  }

  .title {
    span {
      display: block;
      padding-left: 4rem;
    }

    p {
      margin: 0;
      font-size: 3rem;
      line-height: 40px;
      font-style: italic;
      font-weight: 700;
      text-align: center;
      color: ${({ theme }) => theme.primary};
    }
  }
`;
