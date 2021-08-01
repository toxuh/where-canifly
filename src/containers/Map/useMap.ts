import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPositionAction } from '../../common/app/actions';
import {
  isUserPositionSelector,
  positionSelector,
} from '../../common/app/selectors';
import { Position } from '../../common/app/types';

type ReturnType = {
  isUserPosition: boolean;
  position: Position;
};

const useMap = (): ReturnType => {
  const dispatch = useDispatch();

  const position = useSelector(positionSelector);
  const isUserPosition = useSelector(isUserPositionSelector);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        dispatch(
          setPositionAction({
            lon: pos.coords.longitude,
            lat: pos.coords.latitude,
          }),
        );
      },
      undefined,
      {
        enableHighAccuracy: true,
        timeout: 1000 * 60,
        maximumAge: 1000 * 3600 * 24,
      },
    );
  }, [dispatch]);

  return { isUserPosition, position };
};

export default useMap;
