import styled from "styled-components";
import { ReactElement, FC } from "react";

export const InfoWindow: FC = (): ReactElement => {
  return (
    <StyledInfoWindow>
      <p className="location">台北晶華酒店 Regent Taipei</p>
      <p className="address">
        No. 3號, Lane 39, Section 2,
        <br /> Zhongshan North Road, Zhongshan
        <br /> District, Taipei City, Taiwan 104
      </p>

      {/* REVIEWS NEED TO GO HERE */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/maps?ll=25.054231,121.524194&z=16&t=m&hl=en-US&gl=US&mapclient=embed&cid=7944188266752151210"
      >
        <div>
          View larger map / <br /> hotel information
        </div>
      </a>
    </StyledInfoWindow>
  );
};

const StyledInfoWindow = styled("div")`
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 1px 4px -1px;
  border-radius: 2px;
  line-height: 1.2;

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
