import styled from "styled-components";
import { ReactElement, FC } from "react";
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import mapStyles from "../util/mapStyles";
// import { Loading } from '../Loading';
import { MapsMarker } from "./Marker";

import GoogleMapReact from "google-map-react";
import { InfoWindow } from "./InfoWindow";

// const mapContainerStyle = {
//   width: '100%',
//   height: '100%',
// };

const center = {
  lat: 25.0542358,
  lng: 121.5220053,
};

const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: false,
  query: "Regents",
};

export const VenueLocation: FC = (): ReactElement => {
  return (
    <StyledVenueLocation>
      <InfoWindow></InfoWindow>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.GOOGLE_MAPS_API_KEY,
          language: "en",
          region: "us",
        }}
        defaultCenter={center}
        defaultZoom={6}
        options={options}
      >
        {/* 
        //@ts-ignore */}
        <MapsMarker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </StyledVenueLocation>
  );
};

export default VenueLocation;

const StyledVenueLocation = styled("div")`
  height: 100%;
  background-color: red;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
  }

  @media (max-width: 1446px) {
    overflow-y: initial;
  }
`;
