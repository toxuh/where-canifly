import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPositionAction } from '../../common/app/actions';
import {
  currentTypeSelector,
  isUserPositionSelector,
  positionSelector,
  typesSelector,
} from '../../common/app/selectors';
import type { Category, Position } from '../../common/app/types';

type ReturnType = {
  currentType: string;
  editMode: boolean;
  isUserPosition: boolean;
  position: Position;
  setEditMode: (mode: boolean) => void;
  setNewPosition: (data: Position) => void;
  types: Category[];
};

const useMap = (): ReturnType => {
  const dispatch = useDispatch();

  const [editMode, setEditMode] = useState(false);

  const currentType = useSelector(currentTypeSelector);
  const position = useSelector(positionSelector);
  const isUserPosition = useSelector(isUserPositionSelector);
  const types = useSelector(typesSelector);

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
    (data: Position) => {
      console.log(1);
      dispatch(setPositionAction(data));
    },
    [dispatch],
  );

  return {
    currentType,
    editMode,
    isUserPosition,
    position,
    setEditMode,
    setNewPosition,
    types,
  };
};

export default useMap;
