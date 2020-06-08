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
          window blind. Her night ended with her being coherent and finishing
          her calculus homework. It all started from there.
        </p>

        <p>
          As we got to know each other, our spark grew into a flame. I asked her
          out in front of a karaoke bar after screaming my way through "The
          Power of Love" by Celine Dion all night. Here we are ten years later
          ride or die for each other. Thank you Celine.
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
        <h2>Our Friends</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          veniam consectetur nobis, iusto nemo blanditiis ipsa dicta ducimus
          possimus. Quod laboriosam alias ut repellat dolorum nulla, qui
          quibusdam esse ad corrupti voluptas blanditiis eaque dolor voluptates
          porro quia, maxime vero cupiditate. Vero ratione placeat odit, maiores
          quasi, soluta nam facere id dolore, impedit sit rerum tenetur aut eius
          voluptate magni quia deserunt commodi quas debitis reprehenderit. Ab
          et sequi asperiores dolore quam eaque, totam itaque eos porro ducimus
          aut, nam doloremque eveniet incidunt ad, cupiditate tenetur ex soluta?
          Reprehenderit eius reiciendis doloribus sunt facere at perspiciatis
          debitis odit voluptatum deserunt.
        </p>
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
        <h2>Our Families</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
          veniam consectetur nobis, iusto nemo blanditiis ipsa dicta ducimus
          possimus. Quod laboriosam alias ut repellat dolorum nulla, qui
          quibusdam esse ad corrupti voluptas blanditiis eaque dolor voluptates
          porro quia, maxime vero cupiditate. Vero ratione placeat odit, maiores
          quasi, soluta nam facere id dolore, impedit sit rerum tenetur aut eius
          voluptate magni quia deserunt commodi quas debitis reprehenderit. Ab
          et sequi asperiores dolore quam eaque, totam itaque eos porro ducimus
          aut, nam doloremque eveniet incidunt ad, cupiditate tenetur ex soluta?
          Reprehenderit eius reiciendis doloribus sunt facere at perspiciatis
          debitis odit voluptatum deserunt.
        </p>
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
  padding-top: 12rem;
  /* overflow-y: scroll; */

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

  .slick-dots {
    bottom: 1rem;

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
    padding: 8rem 2rem 0;

    .anchor-right {
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
