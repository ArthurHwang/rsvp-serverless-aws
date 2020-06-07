import styled from "styled-components";
import { ReactElement, FC } from "react";
import { Image } from "../Image";
import Link from "next/link";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 7000,
  cssEase: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
  pauseOnHover: false,
  className: "slick-container",
  lazyLoad: "progressive",
  fade: false,
};

export const VenueAbout: FC = (): ReactElement => {
  return (
    <StyledVenueAbout>
      {/* <h2>Venue Information</h2> */}

      <h3>Regents Hotel</h3>

      <p>
        Come celebrate with us at the premier 5-star luxury hotel -{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.regenthotels.com/regent-taipei/"
        >
          Regent Taipei
        </a>
        .
      </p>

      <Image
        path="venue/c5a3d0f2-f0ea-40e3-9686-d0bd111e6189.jpg"
        alt="regents 1"
      />

      <p>
        <span>** </span>Please{" "}
        <Link href="/rsvp">
          <a>contact</a>
        </Link>{" "}
        us if you would like to reserve a room at Regent Taipei at a discounted
        rate. <span>**</span>
      </p>

      <p>
        Our guests can enjoy a special room rate, however there is a cut-off
        date so please let us know ASAP.
      </p>

      {/* <br /> */}

      <p>
        From sprawling night markets and endless shopping locations to numerous
        fine arts museums, there is no shortage of activities. Something is
        bound to tickle your fancy.
      </p>

      <p>
        The hotel is located in the heart of{" "}
        <a href="https://en.wikipedia.org/wiki/Taipei_101">Taipei 101's </a>
        financial district. Previously the tallest building in the world for 6
        years!
      </p>

      {/* <p></p> */}

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
      {/* <h2>Food</h2> */}

      <h3>Food</h3>

      <p>
        There is no need to select beef, chicken, or fish. Food at the party
        will be served family style at each table so you can pick and choose to
        your liking.
      </p>
      <p>
        Apart from the venue's food, Taiwan has an amazing food culture. Every
        street and alley is filled with mouth-watering eats. I encourage you to
        try everything you can.
      </p>

      {/* 
      //@ts-ignore */}
      <Slider style={{ margin: "2rem 0" }} {...settings}>
        <Image path="venue/food/gallery-40-1920x1080.jpg" alt="regents 7" />
        <Image path="venue/food/gallery-52-1920x1080.jpg" alt="regents 8" />
        <Image path="venue/food/gallery-41-1920x1080.jpg" alt="regents 9" />
        <Image path="venue/food/gallery-48-1920x1080.jpg" alt="regents 10" />
        <Image path="venue/food/gallery-51-1920x1080.jpg" alt="regents 11" />
        <Image path="venue/gallery-10-1920x1080.jpg" alt="regents 12" />
      </Slider>
    </StyledVenueAbout>
  );
};

const StyledVenueAbout = styled("div")`
  height: 100vh;
  background-color: ${({ theme }) => theme.black};
  padding: 6rem 2rem;
  overflow-y: scroll;
  line-height: 1.8;

  h2 {
    color: ${({ theme }) => theme.red};
  }

  h3 {
    color: ${({ theme }) => theme.red};
  }

  span {
    color: red;
  }

  p {
    line-height: 1.1;
    color: ${({ theme }) => theme.primary};
    font-size: 1.4rem;
    /* word-spacing: 2px; */
    letter-spacing: 1px;
    /* font-weight: 400; */
  }

  img {
    width: 100%;
  }

  @media (max-width: 1445px) {
    height: 100%;
    overflow-y: initial;
    height: auto;
  }

  @media (max-width: 800px) {
    padding: 4rem 2rem;
  }

  .slick-slider {
    .slick-prev {
      left: 20px;
      z-index: 200;
    }
    .slick-next {
      right: 20px;
    }
  }
`;
