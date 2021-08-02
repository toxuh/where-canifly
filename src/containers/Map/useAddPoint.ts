import { useCallback, useState } from 'react';
import { useRequest } from '@umijs/hooks';
import type { ClickEventValue } from 'google-map-react';

import { addPoint } from '../../api';
import type { AddPointType } from '../../api';

import type { Position } from '../../common/app/types';

type ReturnType = {
  coords: Position;
  handleAddPoint: (point: AddPointType) => void;
  handleClick: (data: ClickEventValue) => void;
  modal: boolean;
  setModal: (state: boolean) => void;
};

const useAddPoint = (): ReturnType => {
  const [modal, setModal] = useState(false);
  const [coords, setCoords] = useState<Position>({ lat: 0, lon: 0 });

  const handleClick = useCallback(
    (data) => {
      setModal(true);
      setCoords({ lat: data.lat, lon: data.lng });
    },
    [setCoords, setModal],
  );

  const { run: handleAddPointRequest } = useRequest(addPoint, { manual: true });

  const handleAddPoint = useCallback(async (point) => {
    const data = await handleAddPointRequest(point);

    console.log(data);
  }, []);

  return { coords, handleAddPoint, handleClick, modal, setModal };
};

export default useAddPoint;
