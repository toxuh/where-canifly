import React from 'react';
import GoogleMapReact from 'google-map-react';

import { GOOGLE_API_KEY } from '../../constants';

import useMap from './useMap';
import './Map.scss';

const Map: React.FC = () => {
  const { position } = useMap();

  return (
    <section className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY || '' }}
        defaultCenter={{ lat: 55.7575757, lng: 37.6272607 }}
        center={{ lat: position.lat, lng: position.lon }}
        zoom={13}
        yesIWantToUseGoogleMapApiInternals
      />
    </section>
  );
};

export default Map;
