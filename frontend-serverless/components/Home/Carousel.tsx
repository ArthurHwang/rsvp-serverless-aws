import { FC, ReactElement } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Indicator } from "./Indicator";

const settings = {
  dots: false,
  infinite: true,
  speed: 6500,
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
        <img
          src={require("./images/IMG_4889_vignette.jpg?webp")}
          alt="carol and arthur"
        />
        <img
          src={require("./images/IMG_4985_vignette.jpg?webp")}
          alt="carol and arthur"
        />
        <img
          src={require("./images/IMG_5123_vignette.jpg?webp")}
          alt="carol and arthur"
        />
      </Slider>
      <Indicator />
    </StyledCarousel>
  );
};

const StyledCarousel = styled("div")`
  height: 100%;

  img {
    height: 100%;
    object-fit: cover;
  }

  .slick-dots {
    bottom: 10px;

    & button:before {
      color: yellow;
      opacity: 1;
    }
  }

  .slick-active button:before {
    color: red !important;
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
