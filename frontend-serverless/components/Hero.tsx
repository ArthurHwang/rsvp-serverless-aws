import styled from 'styled-components';
import Slider from 'react-slick';

export const Hero: React.FC = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 8000,
    cssEase: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    pauseOnHover: false,
    className: 'slick-container',
    lazyLoad: 'progressive',
    fade: true,
  };
  return (
    <StyledHero>
      <LayoutGrid>
        <Slider {...settings}>
          <img
            src={require('./images/IMG_4889_colored_toned.jpg?webp')}
            alt="carol and arthur"
          />
          <img
            src={require('./images/IMG_4985_colored_toned.jpg?webp')}
            alt="carol and arthur"
          />
          <img
            src={require('./images/IMG_5123_colored_toned.jpg?webp')}
            alt="carol and arthur"
          />
        </Slider>
        <div className="right">
          <h2>She said I do, I hope you do too</h2>
        </div>
      </LayoutGrid>
    </StyledHero>
  );
};

const StyledHero = styled('div')`
  height: 100%;
`;

const LayoutGrid = styled('div')`
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: 60% 40%;
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      object-fit: cover;
    }

    h2 {
      margin: 0;
    }

    .right {
      background-color: #aaa;
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;
