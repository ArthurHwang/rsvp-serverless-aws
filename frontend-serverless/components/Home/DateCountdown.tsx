import styled from "styled-components";
import { Component } from "react";

type Props = {
  targetDate: string;
  targetTime: string;
};

export default class CountDown extends Component<Props> {
  state = {
    remaining: {
      days: 0,
      hrs: 0,
      min: 0,
      sec: 0,
    },
    isExpired: false,
  };
  // @ts-ignore
  // needs to be here for clearInterval
  timer;

  // @ts-ignore
  // needs to be here for clearInterval
  distance;

  componentDidMount() {
    this.setDate();
    this.counter();
  }

  setDate = () => {
    const { targetDate, targetTime } = this.props,
      now = new Date().getTime(),
      countDownDate = new Date(targetDate + " " + targetTime).getTime();

    this.distance = countDownDate - now;

    if (this.distance < 0) {
      clearInterval(this.timer);
      this.setState({ isExpired: true });
    } else {
      this.setState({
        remaining: {
          days: Math.floor(this.distance / (1000 * 60 * 60 * 24)),
          hrs: Math.floor(
            (this.distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          min: Math.floor((this.distance % (1000 * 60 * 60)) / (1000 * 60)),
          sec: Math.floor((this.distance % (1000 * 60)) / 1000),
        },
        isExpired: false,
      });
    }
  };

  counter = () => {
    this.timer = setInterval(() => {
      this.setDate();
    }, 1000);
  };

  render() {
    const { remaining, isExpired } = this.state,
      { targetDate, targetTime } = this.props;

    return (
      <StyledDateCountdown>
        {!isExpired && targetDate && targetTime ? (
          <div className="counter">
            {Object.entries(remaining).map((el, i) => (
              <div key={i} className="entry">
                <div key={el[1]} className="entry-value">
                  <span className="count top curr flipTop">{el[1] + 1}</span>
                  <span className="count top next">{el[1]}</span>
                  <span className="count bottom next flipBottom">{el[1]}</span>
                  <span className="count bottom curr">{el[1] + 1}</span>
                </div>
                <div className="entry-title">{el[0].toUpperCase()}</div>
              </div>
            ))}
          </div>
        ) : (
          <p className="alert-danger">Expired</p>
        )}
      </StyledDateCountdown>
    );
  }
}

const StyledDateCountdown = styled("div")`
  margin: 3rem 0;
  font-family: "arial";
  .counter {
    text-align: center;
    display: inline-flex;
    justify-content: center;
    width: 100%;
    background-color: ${({ theme }) => theme.grey};
  }

  .entry {
    text-align: center;
    padding: 2px;
    width: 70px;

    .entry-value {
      position: relative;
      height: 95px;
      perspective: 200px;
      backface-visibility: hidden;
      transform: translateZ(0);
      transform: translate3d(0, 0, 0);
      margin: 0 auto;
      color: #ddd;
    }

    .entry-title {
      width: 100%;
      color: #ddd;
      margin-top: 5px;
      font-weight: bold;
    }
  }

  .count {
    background-color: #202020;
    color: #fff;
    display: block;
    font-size: 2em;
    line-height: 2.4em;
    overflow: hidden;
    position: absolute;
    text-align: center;
    top: 0;
    width: 100%;

    &.top {
      height: 50%;
      line-height: 95px;
      transform-origin: 50% 100%;
    }

    &.bottom {
      line-height: 0;
      height: 50%;
      top: 50%;
      transform-origin: 50% 0;
    }

    &.flipTop {
      animation-name: flipTop;
      animation-duration: 0.3s;
      animation-fill-mode: both;
      z-index: 1;
    }
    &.flipBottom {
      animation-name: flipBottom;
      animation-duration: 0.3s;
      animation-delay: 0.3s;
      animation-fill-mode: both;
      z-index: 1;
    }
  }

  .alert-danger {
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
    position: relative;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 0.25rem;
    text-align: center;
  }

  @keyframes flipTop {
    from {
      transform: rotateX(0deg);
    }
    to {
      transform: rotateX(-90deg);
    }
  }
  @keyframes flipBottom {
    from {
      transform: rotateX(90deg);
    }
    to {
      transform: rotateX(0deg);
    }
  }
`;
