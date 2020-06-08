import styled from "styled-components";
import { ReactElement, FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type Props = {
  ratingsReviews: {
    rating: number;
    totalReviews: number;
  };
};
// @ts-ignore
export const InfoWindow: FC<Props> = ({ ratingsReviews }): ReactElement => {
  function generateRating() {
    const payload = [];
    for (let i = 0; i < ratingsReviews.rating; i++) {
      if (i > 3) {
        payload.push(<FaStarHalf className="gold" />);
      } else {
        payload.push(<FaStar className="gold" />);
      }
    }
    return payload;
  }

  return (
    <StyledInfoWindow>
      <p className="location">台北晶華酒店 Regent Taipei</p>
      <p className="address">
        No. 3號, Lane 39, Section 2,
        <br /> Zhongshan North Road, Zhongshan
        <br /> District, Taipei City, Taiwan 104
      </p>

      <div className="ratings-reviews">
        <div className="rating">
          <span className="gold">{ratingsReviews.rating}</span>
          <div className="stars">
            {[1, 2, 3, 4, 5].map((el, idx) => (
              <FaStar className="review-star" key={idx} />
            ))}
            <div className="stars-realized">{generateRating()}</div>
          </div>
        </div>

        <a href="https://www.google.com/travel/hotels/entity/CgoIqp3apLek259uEAE/reviews?g2lb=202158%2C2502548%2C4258168%2C4260007%2C4270442%2C4274032%2C4291318%2C4305595%2C4306835%2C4317915%2C4326765%2C4328159%2C4329288%2C4366684%2C4373849%2C4381263%2C4382325%2C4385383%2C4386665%2C4386795%2C4387291%2C4388508%2C4270859%2C4284970%2C4291517%2C4307996%2C4356900&hl=en&gl=us&un=1&rp=EKqd2qS3pNufbhCqndqkt6Tbn244AkAASAE&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&hrf=IgNVU0QqFgoHCOQPEAYYCxIHCOQPEAYYDBgBKACCASUweDM0NDJhOTY4ZjY4NzI5ZTc6MHg2ZTNmNmQyMzc0OTY4ZWFhmgEnGiUweDM0NDJhOTY4ZjY4NzI5ZTc6MHg2ZTNmNmQyMzc0OTY4ZWFh">
          {ratingsReviews.totalReviews} reviews
        </a>
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps?ll=25.054231,121.524194&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=7944188266752151210"
      >
        <div>View larger map / hotel information</div>
      </a>
    </StyledInfoWindow>
  );
};

const StyledInfoWindow = styled("div")`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  border-radius: 2px;
  line-height: 1.2;

  .ratings-reviews {
    margin-bottom: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .rating {
      display: inherit;
      /* position: relative; */
    }

    .stars {
      margin-left: 0.4rem;
      position: relative;

      .review-star {
        border: none;
        color: rgba(0, 0, 0, 0.2);
      }
    }

    .stars-realized {
      position: absolute;
      top: 0;
      left: 0;
    }

    .gold {
      color: #ff8100;
    }
  }

  p.location {
    margin-bottom: 1.2rem;
    margin-top: 0;
  }

  p.address {
    font-size: 1.1rem;
    font-weight: 400;
  }

  a {
    font-size: 1.1rem;
    color: #3a84df;
    line-height: 1;
  }

  padding: 1rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  z-index: 500;
  background-color: ${({ theme }) => theme.primary};
`;
