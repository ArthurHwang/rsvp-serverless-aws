import { FC, ReactElement, useEffect, useState } from "react";
import styled from "styled-components";

export const Indicator: FC = (): ReactElement => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // if (window.scrollY === 0) {
      //   setScrolled(false);
      // } else {
      //   setScrolled(true);
      // }
      setScrolled(true);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <StyledIndicator className={`${scrolled ? "hidden" : ""}`}>
      <div className="mouse">
        <div className="mouse-icon">
          <span className="mouse-wheel"></span>
        </div>
      </div>
    </StyledIndicator>
  );
};

const StyledIndicator = styled("div")`
  &.hidden {
    transition: opacity 0.5s;
    opacity: 0;
  }
  .mouse {
    position: absolute;
    left: 0;
    bottom: 6rem;
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

  @media (min-width: 1444px) {
    & {
      display: none;
    }
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
