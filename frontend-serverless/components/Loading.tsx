import { FC, ReactElement } from "react";
import styled from "styled-components";

type Props = {
  className?: string;
};
export const Loading: FC<Props> = ({ className }): ReactElement => {
  return (
    <StyledLoading className={className}>
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </StyledLoading>
  );
};

const StyledLoading = styled("div")`
  margin: 100px auto;
  width: 50px;
  height: 40px;
  text-align: center;
  font-size: 10px;

  &.in-place {
    margin: 0 auto;
  }

  &.small {
    height: 40px;
    margin-bottom: 0.5rem;
  }

  & > div {
    background-color: ${({ theme }) => theme.red};
    height: 100%;
    width: 6px;
    display: inline-block;
    margin: 0 0.2rem;

    -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
    animation: sk-stretchdelay 1.2s infinite ease-in-out;
  }

  & .rect2 {
    -webkit-animation-delay: -1.1s;
    animation-delay: -1.1s;
  }

  & .rect3 {
    -webkit-animation-delay: -1s;
    animation-delay: -1s;
  }

  & .rect4 {
    -webkit-animation-delay: -0.9s;
    animation-delay: -0.9s;
  }

  & .rect5 {
    -webkit-animation-delay: -0.8s;
    animation-delay: -0.8s;
  }

  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }

  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
    }
  }
`;
