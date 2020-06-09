import styled from "styled-components";
import { ReactElement, FC } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import useSWR from "swr";
import { Loading } from "../Loading";

function generateRating(rating: number) {
  const payload = [];
  for (let i = 0; i < rating; i++) {
    if (i > 3) {
      payload.push(<FaStarHalf key={i} className="gold" />);
    } else {
      payload.push(<FaStar key={i} className="gold" />);
    }
  }
  return payload;
}

export const ReviewInfo: FC = (): ReactElement => {
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  const placeID = `ChIJ5ymH9mipQjQRqo6WdCNtP24`;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeID}&key=${process.env.GOOGLE_MAPS_API_KEY}`;

  const fetcher = (...args: any) =>
    // @ts-ignore
    fetch(...args).then((res: any) => res.json());

  const { data, error } = useSWR(proxyurl + url, fetcher, {
    revalidateOnFocus: false,
  });

  if (error) {
    return <div>Error... unable to fetch data</div>;
  }

  if (!data) {
    return <Loading className="in-place small" />;
  }

  return (
    <StyledReviewInfo>
      <div className="rating">
        <span className="gold">{data.result.rating}</span>
        <div className="stars">
          {Array.from({ length: 5 }).map((_el, idx) => (
            <FaStar className="review-star" key={idx} />
          ))}
          <div className="stars-realized">
            {generateRating(data.result.rating)}
          </div>
        </div>
      </div>
      <div
        className="ratings-reviews"
        style={{ position: "relative", bottom: "1px" }}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/travel/hotels/entity/CgoIqp3apLek259uEAE/reviews?g2lb=202158%2C2502548%2C4258168%2C4260007%2C4270442%2C4274032%2C4291318%2C4305595%2C4306835%2C4317915%2C4326765%2C4328159%2C4329288%2C4366684%2C4373849%2C4381263%2C4382325%2C4385383%2C4386665%2C4386795%2C4387291%2C4388508%2C4270859%2C4284970%2C4291517%2C4307996%2C4356900&hl=en&gl=us&un=1&rp=EKqd2qS3pNufbhCqndqkt6Tbn244AkAASAE&ictx=1&sa=X&utm_campaign=sharing&utm_medium=link&utm_source=htls&hrf=IgNVU0QqFgoHCOQPEAYYCxIHCOQPEAYYDBgBKACCASUweDM0NDJhOTY4ZjY4NzI5ZTc6MHg2ZTNmNmQyMzc0OTY4ZWFhmgEnGiUweDM0NDJhOTY4ZjY4NzI5ZTc6MHg2ZTNmNmQyMzc0OTY4ZWFh"
        >
          {data.result.user_ratings_total} reviews
        </a>
      </div>
    </StyledReviewInfo>
  );
};

const StyledReviewInfo = styled("div")`
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;

  .rating {
    display: inherit;
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
    /* color: ${({ theme }) => theme.red}; */
  }
`;
