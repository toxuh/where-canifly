import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPositionAction } from '../../common/app/actions';
import {
  categoriesSelector,
  isUserPositionSelector,
  positionSelector,
} from '../../common/app/selectors';
import type { Category, Position } from '../../common/app/types';

type ReturnType = {
  categories: Category[];
  editMode: boolean;
  isUserPosition: boolean;
  position: Position;
  setEditMode: (mode: boolean) => void;
  setNewPosition: (data: Position) => void;
};

const useMap = (): ReturnType => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const categories = useSelector(categoriesSelector);
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

  const setNewPosition = useCallback(
    ({ lat, lon }: Position) => dispatch(setPositionAction({ lat, lon })),
    [dispatch],
  );

  return {
    categories,
    editMode,
    isUserPosition,
    position,
    setEditMode,
    setNewPosition,
  };
};

export default useMap;
