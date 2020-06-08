import { FC, ReactElement } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Indicator } from "../Indicator";
import { Image } from "../Image";

const settings = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  pauseOnHover: false,
  className: "slick-container",
  lazyLoad: "progressive",
  fade: true,
};

export const Carousel: FC = (): ReactElement => {
  return (
    <StyledCarousel>
      {/* 
      //@ts-ignore */}
      <Slider {...settings}>
        <Image
          path="home/IMG_4889_vignette.jpg"
          alt="Carol and Arthur on a boat"
        />
        <Image
          path="home/IMG_4985_vignette.jpg"
          alt="Carol and Arthur engagement ring"
        />
        <Image path="home/IMG_5123_vignette.jpg" alt="Carol and Arthur ring" />
      </Slider>
      <Indicator />
    </StyledCarousel>
  );
};

const StyledCarousel = styled("div")`
  height: 100%;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 3rem;

    & button:before {
      color: ${({ theme }) => theme.lightgrey};
      opacity: 1;
    }
  }

  .slick-active button:before {
    color: ${({ theme }) => theme.red} !important;
    opacity: 1 !important;
  }

  .slick-container,
  .slick-list,
  .slick-track,
  .slick-slide,
  .slick-slide div {
    height: 100%;
  }
`;
