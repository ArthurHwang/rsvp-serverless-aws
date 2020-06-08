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
          We met in college. During one of our first meetings, I was trying to
          be a tough guy, so I bet her that she couldn't do a quadruple shot of
          Jack Daniels. The night ended with me begging for dear life against a
          dusty curtain. Her night ended with her being coherent and finishing
          calculus homework. It all started from here.
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
          <Image path="venue/gallery-16-1920x1080.jpg" alt="regents 1" />
          <Image path="venue/gallery-18-1920x1080.jpg" alt="regents 2" />
          <Image path="venue/gallery-31-1920x1080.jpg" alt="regents 3" />
          <Image path="venue/gallery-6-1920x1080.jpg" alt="regents 4" />
          <Image path="venue/gallery-27-1920x1080.jpg" alt="regents 5" />
          <Image path="venue/gallery-37-1920x1080.jpg" alt="regents 6" />
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
        {/* <Image style={{ width: '200px' }} path="giphy-2.gif" alt="regents 6" /> */}
      </div>

      <div className="mobile-show">
        {/* 
        //@ts-ignore */}
        <Slider style={{ margin: "2rem 0 " }} {...settings}>
          <Image path="venue/gallery-16-1920x1080.jpg" alt="regents 1" />
          <Image path="venue/gallery-18-1920x1080.jpg" alt="regents 2" />
          <Image path="venue/gallery-31-1920x1080.jpg" alt="regents 3" />
          <Image path="venue/gallery-6-1920x1080.jpg" alt="regents 4" />
          <Image path="venue/gallery-27-1920x1080.jpg" alt="regents 5" />
          <Image path="venue/gallery-37-1920x1080.jpg" alt="regents 6" />
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

        <div className="gif-container">
          <Image className="gif" path="giphy.gif" alt="regents 6" />
        </div>
      </div>
      <div className="mobile-show">
        {/* 
        //@ts-ignore */}
        <Slider style={{ margin: "2rem 0 4rem" }} {...settings}>
          <Image path="venue/gallery-16-1920x1080.jpg" alt="regents 1" />
          <Image path="venue/gallery-18-1920x1080.jpg" alt="regents 2" />
          <Image path="venue/gallery-31-1920x1080.jpg" alt="regents 3" />
          <Image path="venue/gallery-6-1920x1080.jpg" alt="regents 4" />
          <Image path="venue/gallery-27-1920x1080.jpg" alt="regents 5" />
          <Image path="venue/gallery-37-1920x1080.jpg" alt="regents 6" />
        </Slider>
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
    /* font-size: 2.6rem; */
    /* line-height: 1; */
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
      margin: 1rem -2rem 0 !important;
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
