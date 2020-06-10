import styled from "styled-components";
import { FC, ReactElement } from "react";
import { Image } from "../Image";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 7000,
  pauseOnHover: false,
  adaptiveHeight: true,
  className: "slick-container",
  lazyLoad: "progressive",
  fade: false,
};

export const Story: FC = (): ReactElement => {
  return (
    <StyledStory>
      <div className="anchor-right">
        <h2>Our Story</h2>
        <p>
          We met in college. During one of our first encounters, I was trying to
          be a tough guy, so I bet her that she couldn't do a quadruple shot of
          Jack Daniels. The night ended with me begging for dear life against a
          dusty curtain. Her night ended with finishing calculus homework and
          balancing her checkbook. It all started from here.
        </p>

        <p>
          As we got to know each other, our spark grew into a flame. I asked her
          out in front of a karaoke bar after screaming my way through "The
          Power of Love" by Celine Dion - maybe she got the hint. Here we are
          ten years later ride or die for each other. Thanks Celine!
        </p>
      </div>
      <div className="mobile-show">
        {/* 
        //@ts-ignore */}
        <Slider style={{ margin: "2rem 0" }} {...settings}>
          <Image path="history/photo-2.jpg" alt="photo 1" />
          <Image path="history/photo-4-resized.jpg" alt="photo 2" />
          <Image path="history/photo-6-resized.jpg" alt="photo 3" />
          <Image path="history/me-carol.jpg" alt="photo 4" />
          <Image path="history/photo-14-resized.jpg" alt="photo 5" />
          <Image path="history/photo-6-resized.jpg" alt="photo 6" />
        </Slider>
      </div>

      <div className="anchor-right">
        <h2>Our Families</h2>
        <p>
          I would like to say a special thank you to the sisters Catherine and
          Connie. Without their emotional and psychological support over the
          years, we might have crashed and burned many years ago.
        </p>

        <p>
          To the rest of our families - thank you all for supporting us and
          being great people. We love you all and hope to see everyone in
          Taiwan!
        </p>
      </div>

      <div className="mobile-show">
        {/* 
        //@ts-ignore */}
        <Slider style={{ margin: "2rem 0 " }} {...settings}>
          <Image path="history/photo-7-resized.jpg" alt="photo 7" />
          <Image path="history/photo-9-resized.jpg" alt="photo 8" />
          <Image path="history/photo-16-resized.jpg" alt="photo 9" />
          <Image path="history/photo-10-resized.jpg" alt="photo 10" />
          <Image path="history/photo-12-resized.jpg" alt="photo 11" />
          <Image path="history/photo-15-resized.jpg" alt="photo 12" />
        </Slider>
      </div>
      <div className="anchor-right">
        <h2>Our Friends</h2>
        <p>
          Carol and I don't get out much but when we see our friends, it usually
          revolves around the same group of people that have been kind enough to
          put up with me for all this time. You know who you are, you are all
          great people and we appreciate you all.
        </p>
      </div>
      <div className="mobile-show">
        {/* 
        //@ts-ignore */}
        <Slider style={{ margin: "2rem 0 4rem" }} {...settings}>
          <Image path="history/photo-5-resized.jpg" alt="photo 13" />
          <Image path="history/photo-13-resized.jpg" alt="photo 14" />
          <Image path="history/us-matt.jpg" alt="photo 15" />
          <Image path="history/photo-8-resized.jpg" alt="photo 16" />
        </Slider>
      </div>

      <div className="gif-container">
        <Image className="gif" path="giphy.gif" alt="power rangers" />
      </div>
    </StyledStory>
  );
};

const StyledStory = styled("div")`
  background-color: ${({ theme }) => theme.black};
  padding-top: 8rem;
  overflow-y: auto;

  img {
    width: 100%;
  }

  h2 {
    color: ${({ theme }) => theme.red};
  }

  p {
    margin: 1rem 0 0;
    color: ${({ theme }) => theme.primary};
    width: 60%;
    line-height: 1.2;
    font-size: 1.4rem;
    letter-spacing: 0.2px;
    font-weight: 700;
  }

  .gif {
    width: 275px;
    margin-top: 2rem;
  }

  .gif-container {
    text-align: right;
    padding-right: 2rem;
  }

  .slick-dots {
    bottom: 1.5rem;

    & button:before {
      color: ${({ theme }) => theme.lightgrey};
      opacity: 1;
    }
  }

  .slick-active button:before {
    color: ${({ theme }) => theme.red} !important;
    opacity: 1 !important;
  }

  .slick-slider {
    .slick-prev {
      left: 10px;
      z-index: 200;
    }
    .slick-next {
      right: 10px;
    }
  }

  .anchor-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 2rem;
    margin-bottom: 2rem;

    p {
      text-align: right;
    }
  }
  .anchor-left {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 2rem;
    margin-bottom: 2rem;

    p {
      text-align: left;
    }
  }

  @media (max-width: 1445px) {
    padding-top: 8rem;
    overflow: initial;
    overflow-x: hidden;
    padding-bottom: 6rem;

    .gif-container {
      width: 60.5%;
      margin: 0 auto;
      padding: 0;
    }
    .gif {
      width: 100%;
    }

    .anchor-right {
      h2 {
        width: 60%;
      }
      align-items: center;

      p {
        text-align: left;
      }
    }
  }

  @media (max-width: 530px) {
    padding: 6rem 2rem 2rem;

    .slick-container {
      margin: 2rem -2rem !important;
    }

    .gif-container {
      width: 100%;
      margin-top: -2rem;
      margin-bottom: 4rem;

      img {
        width: 100%;
      }
    }

    .gif {
      width: 100%;
    }

    .anchor-right {
      padding: 0;
      h2,
      p {
        width: 100%;
      }
    }
  }

  @media (min-width: 529px) {
    .slick-container {
      display: none;
    }
  }
`;
