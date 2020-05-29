import { FC, ReactElement } from "react";
import styled from "styled-components";

export const Indicator: FC = (): ReactElement => {
  return (
    <StyledIndicator>
      <div className="mouse">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </div>
    </StyledIndicator>
  );
};

const StyledIndicator = styled("div")`
  .mouse {
    position: absolute;
    left: 0;
    bottom: 2rem;
    right: 0;
    display: flex;
    justify-content: center;
  }

  .mouse-icon {
    width: 25px;
    height: 45px;
    margin: 0;
    border: 2px solid white;
    border-radius: 15px;
    cursor: pointer;
    position: relative;
    text-align: center;
  }

  .mouse-wheel {
    height: 6px;
    margin: 2px auto 0;
    display: block;
    width: 3px;
    background-color: white;
    border-radius: 50%;
    -webkit-animation: 1.6s ease infinite wheel-up-down;
    -moz-animation: 1.6s ease infinite wheel-up-down;
    animation: 1.6s ease infinite wheel-up-down;
  }

  @-webkit-keyframes wheel-up-down {
    0% {
      margin-top: 2px;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      margin-top: 20px;
      opacity: 0;
    }
  }
  @-moz-keyframes wheel-up-down {
    0% {
      margin-top: 2px;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      margin-top: 20px;
      opacity: 0;
    }
  }
  @keyframes wheel-up-down {
    0% {
      margin-top: 2px;
      opacity: 0;
    }
    30% {
      opacity: 1;
    }
    100% {
      margin-top: 20px;
      opacity: 0;
    }
  }
`;
