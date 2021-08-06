import React, { useCallback } from 'react';
import GoogleMapReact from 'google-map-react';
import { Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import AddPointModal from '../AddPointModal/AddPointModal';
import Point from '../Point/Point';
import Search from '../Search/Search';

import { DEFAULT_MAP_COORDS, GOOGLE_API_KEY } from '../../constants';

import useAddPoint from './useAddPoint';
import useBootstrap from './useBootstrap';
import useMap from './useMap';
import './Map.scss';

const Map: React.FC = () => {
  const { coords, handleAddPoint, handleClick, modal, setModal } =
    useAddPoint();
  const { fetchPoints, points } = useBootstrap();
  const {
    currentType,
    editMode,
    position,
    setEditMode,
    setNewPosition,
    types,
  } = useMap();

  const handleBootstrap = useCallback(
    ({ map }: { map: google.maps.Map }) => {
      map.setCenter({
        lat: position.lat as number,
        lng: position.lon as number,
      });

      if (currentType) {
        fetchPoints({
          latitude: position.lat as number,
          longitude: position.lon as number,
        });
      }
    },
    [currentType, position],
  );

  return (
    <section className="Map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={DEFAULT_MAP_COORDS}
        zoom={14}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={handleBootstrap}
        onClick={(data) => {
          if (editMode) {
            handleClick(data);
          }
        }}
        onDragEnd={(map) => {
          const lat = map.getCenter().lat();
          const lon = map.getCenter().lng();

          setNewPosition({
            lat,
            lon,
          });

          fetchPoints({
            latitude: lat.toFixed(8),
            longitude: lon.toFixed(8),
          });
        }}
        onZoomAnimationEnd={(zoom) => {
          setNewPosition({ zoom });
          fetchPoints({ zoom });
        }}
      >
        {points?.length &&
          points.map((point) => (
            <Point data={point} lat={point.latitude} lng={point.longitude} />
          ))}
      </GoogleMapReact>
      {Boolean(types.length) && <Search categories={types} />}
      <Button
        className="AddPointButton"
        shape="circle"
        size="large"
        type={editMode ? 'primary' : 'default'}
        onClick={() => setEditMode(!editMode)}
      >
        <PlusOutlined />
      </Button>
      <AddPointModal
        coords={coords}
        modal={modal}
        setModal={setModal}
        onSubmit={handleAddPoint}
      />
    </section>
  );
};

export default Map;
