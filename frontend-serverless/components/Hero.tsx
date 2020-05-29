import styled from 'styled-components';
import Slider from 'react-slick';
import MdHeart from 'react-ionicons/lib/MdHeart';

export const Hero: React.FC = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 6500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 10000,
    cssEase: 'cubic-bezier(0.165, 0.840, 0.440, 1.000)',
    pauseOnHover: false,
    className: 'slick-container',
    lazyLoad: 'progressive',
    fade: true,
  };
  return (
    <StyledHero>
      <LayoutGrid>
        {/* 
        // @ts-ignore */}
        <Slider {...settings}>
          <img
            src={require('./images/IMG_4889_vignette.jpg?webp')}
            alt="carol and arthur"
          />
          <img
            src={require('./images/IMG_4985_vignette.jpg?webp')}
            alt="carol and arthur"
          />
          <img
            src={require('./images/IMG_5123_vignette.jpg?webp')}
            alt="carol and arthur"
          />
        </Slider>
        <div className="right">
          {/* <div className="logo"> */}
          <h2>She said I do </h2>
          <MdHeart
            // style={{ position: 'relative', top: '10px' }}
            fontSize="45px"
            color="red"
            beat={true}
          />{' '}
          <h2>I hope you do too</h2>
          <p>To our friends and family,</p>
          <p>
            We cordially invite you to come celebrate with us on August 28, 2020
          </p>
          <p>at The Regents Hotel in Taipei, Taiwan </p>
          {/* </div> */}
        </div>
      </LayoutGrid>
    </StyledHero>
  );
};

const StyledHero = styled('div')`
  height: 100%;
  overflow: hidden;
`;

const LayoutGrid = styled('div')`
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
    background-color: #bbb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6rem;

    .logo {
      background: url('https://s.cdpn.io/7635/averyson-logo.gif') no-repeat;
      background-size: 100%;
      float: left;
      width: 100%;
      height: 30em;
      font-family: Baskerville;
      color: #575557;
      position: relative;
    }
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

  @media (max-width: 1200px) {
    display: block;
    .right {
      display: none;
    }
  }
`;
