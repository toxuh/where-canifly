import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRequest } from '@umijs/hooks';

import { setPointsAction } from '../../common/points/actions';
import { pointsSelector } from '../../common/points/selectors';

import {
  currentTypeSelector,
  positionSelector,
} from '../../common/app/selectors';

import { getPoints } from '../../api';
import type { GetPointsDTO, Point, SetNewPositionType } from '../../api';

type ReturnType = {
  fetchPoints: (params: SetNewPositionType) => void;
  points: Point[];
};

const useBootstrap = (): ReturnType => {
  const dispatch = useDispatch();

  const currentType = useSelector(currentTypeSelector);
  const currentPosition = useSelector(positionSelector);

  const points = useSelector(pointsSelector);

  const { run: handleFetchPoints } = useRequest<GetPointsDTO[]>(getPoints, {
    manual: true,
  });

  const fetchPoints = useCallback(
    async ({
      latitude = currentPosition.lat,
      longitude = currentPosition.lon,
      zoom = currentPosition.zoom,
    }) => {
      const data = await handleFetchPoints({
        latitude,
        longitude,
        zoom,
        typeId: currentType,
      });

      dispatch(setPointsAction(data));
    },
    [currentPosition, currentType, dispatch],
  );

  return { fetchPoints, points };
};

export default useBootstrap;
