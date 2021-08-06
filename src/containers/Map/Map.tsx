import React, { useCallback, useRef, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import useSupercluster from 'use-supercluster';
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
  const mapRef = useRef<google.maps.Map>();
  const [bounds, setBounds] = useState<number[] | null>(null);

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
      mapRef.current = map;

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

  const preparedPoints = points?.map((point) => ({
    type: 'Point',
    properties: { cluster: false, crimeId: point.id, category: point.typeId },
    geometry: {
      type: 'Point',
      coordinates: [point.longitude, point.latitude],
    },
  }));

  const { clusters } = useSupercluster({
    points: preparedPoints,
    bounds,
    zoom: position.zoom as number,
    options: { radius: 75, maxZoom: 20 },
  });

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
        onChange={({ zoom, bounds: mapBounds }) => {
          setNewPosition({
            zoom,
          });

          setBounds([
            mapBounds.nw.lng,
            mapBounds.se.lat,
            mapBounds.se.lng,
            mapBounds.nw.lat,
          ]);
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
        {
          clusters?.map((cluster, index) => {
            const [longitude, latitude] = cluster.geometry.coordinates;
            const { cluster: isCluster, point_count: pointCount } =
              cluster.properties;

            if (isCluster) {
              return (
                <Point
                  key={`cluster-${cluster.id}`}
                  data={points.length ? points[index] : undefined}
                  lat={latitude}
                  lng={longitude}
                >
                  <div
                    className="cluster-marker"
                    style={{
                      width: `${10 + (pointCount / points.length) * 20}px`,
                      height: `${10 + (pointCount / points.length) * 20}px`,
                    }}
                  >
                    {pointCount}
                  </div>
                </Point>
              );
            }

            return (
              <Point
                key={`crime-${cluster.properties.crimeId}`}
                data={points.length ? points[index] : undefined}
                lat={latitude}
                lng={longitude}
              />
            );
          }) /* points?.length &&
          points.map((point) => (
            <Point data={point} lat={point.latitude} lng={point.longitude} />
          )) */
        }
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
