import styled from 'styled-components';
import Slider from 'react-slick';
import MdHeart from 'react-ionicons/lib/MdHeart';
import Link from 'next/link';

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
        <div className="fancy-border right wedding-bg">
          {/* <div className="logo"> */}
          <h2>She said I do </h2>
          <MdHeart
            // style={{ position: 'relative', top: '10px' }}
            fontSize="45px"
            color="red"
            beat={true}
          />{' '}
          <h2>I hope you do too</h2>
          <p>To our friends and family:</p>
          <p>Come celebrate with us on August 28, 2020</p>
          <p>at The Regents Hotel in Taipei, Taiwan </p>
          {/* </div> */}
          <div>5 MONTHS 30 DAYS 20 HOURS 3 SECONDS</div>
          <div>
            Please{' '}
            <Link href="/rsvp">
              <a className="link">RSVP</a>
            </Link>{' '}
            to let us know your coming
          </div>
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

  .fancy-border {
    border: 4rem solid #b88846;
    border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='75' height='75'%3E%3Cg fill='none' stroke='%23B88846' stroke-width='2'%3E%3Cpath d='M1 1h73v73H1z'/%3E%3Cpath d='M8 8h59v59H8z'/%3E%3Cpath d='M8 8h16v16H8zM51 8h16v16H51zM51 51h16v16H51zM8 51h16v16H8z'/%3E%3C/g%3E%3Cg fill='%23B88846'%3E%3Ccircle cx='16' cy='16' r='2'/%3E%3Ccircle cx='59' cy='16' r='2'/%3E%3Ccircle cx='59' cy='59' r='2'/%3E%3Ccircle cx='16' cy='59' r='2'/%3E%3C/g%3E%3C/svg%3E")
      25;
  }

  .right {
    background-color: #bbb;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;

    h2:last-of-type {
      margin-bottom: 2rem;
    }

    p {
      font-size: 2rem;
      text-align: center;
      margin: 1rem;
      height: 4rem;
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
