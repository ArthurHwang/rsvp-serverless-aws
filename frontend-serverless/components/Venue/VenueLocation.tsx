import styled from "styled-components";
import { ReactElement, FC, useState } from "react";
import mapStyles from "../util/mapStyles";
import { Marker } from "./Marker";
import GoogleMapReact from "google-map-react";
import { InfoWindow } from "./InfoWindow";
import { Indicator } from "../Indicator";

const center = {
  lat: 25.0542358,
  lng: 121.5220053,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  gestureHandling: "none",
};

export const VenueLocation: FC = (): ReactElement => {
  const [markerClick, setMarkerClick] = useState(6);

  const handleMarkerClick = () => {
    if (markerClick === 6) {
      setMarkerClick(12);
    } else {
      setMarkerClick(6);
    }
  };

  return (
    <StyledVenueLocation>
      <InfoWindow />

      <div className="map-container">
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.GOOGLE_MAPS_API_KEY,
            language: "en",
            region: "us",
          }}
          defaultCenter={center}
          defaultZoom={6}
          zoom={markerClick}
          center={center}
          options={options}
        >
          <Marker
            onClick={handleMarkerClick}
            //@ts-ignore
            lat={center.lat}
            lng={center.lng}
          />
        </GoogleMapReact>
      </div>
      <Indicator />
    </StyledVenueLocation>
  );
};

export default VenueLocation;

const StyledVenueLocation = styled("div")`
  height: 100vh;
  /* background-color: ${({ theme }) => theme.black}; */
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  @media (max-width: 1445px) {
    /* overflow: initial;
    display: block; */
    /* height: auto; */
    height: 100%;
  }

  .map-container {
    pointer-events: none;
    height: 100%;
    width: 100%;

    .gm-style:nth-child(3) {
      display: none;
    }

    .gm-style-cc {
      display: none;
    }

    .gmnoprint {
      display: none;
    }
  }

  h2 {
    margin: 0;
  }

  @media (max-width: 1446px) {
    overflow-y: initial;
  }
`;
