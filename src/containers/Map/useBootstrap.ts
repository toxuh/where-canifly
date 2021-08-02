import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRequest } from '@umijs/hooks';

import { setPointsAction } from '../../common/points/actions';
import { pointsSelector } from '../../common/points/selectors';

import { getPoints } from '../../api';
import type { GetPointsDTO, GetPointsType, Point } from '../../api';

type ReturnType = {
  fetchPoints: (params: GetPointsType) => void;
  points: Point[];
};

const useBootstrap = (): ReturnType => {
  const dispatch = useDispatch();

  const points = useSelector(pointsSelector);

  const { run: handleFetchPoints } = useRequest<GetPointsDTO[]>(getPoints, {
    manual: true,
  });

  const fetchPoints = useCallback(
    async (params) => {
      const data = await handleFetchPoints(params);

      dispatch(setPointsAction(data));
    },
    [dispatch],
  );

  return { fetchPoints, points };
};

export default useBootstrap;
