import styled from "styled-components";

import { VenueLocation } from "../components/Venue/VenueLocation";
import { VenueAbout } from "../components/Venue/VenueAbout";
import { InferGetServerSidePropsType } from "next";

const VenuePage: any = ({
  ratingsReviews,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <StyledVenue>
      <VenueLocation ratingsReviews={ratingsReviews} />
      <VenueAbout />
    </StyledVenue>
  );
};

export async function getServerSideProps() {
  const res = await fetch(
    `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5ymH9mipQjQRqo6WdCNtP24&key=${process.env.GOOGLE_MAPS_API_KEY}`
  );
  const data = await res.json();
  const ratingsReviews = {
    rating: data.result.rating,
    totalReviews: data.result.user_ratings_total,
  };

  return { props: { ratingsReviews } };
}

export default VenuePage;

const StyledVenue = styled("div")`
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;

  @media (max-width: 1445px) {
    overflow: initial;
    display: block;
  }
`;
