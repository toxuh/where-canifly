import React from 'react';
import { Badge, Popover } from 'antd';

import type { Point as PointType } from '../../api';

import './Point.scss';

type Props = {
  children?: React.ReactNode;
  data?: PointType;
  lat?: number;
  lng?: number;
};

const Point: React.FC<Props> = ({ children, data }) => {
  if (children) {
    return <span>{children}</span>;
  }

  if (!data) {
    return <Badge className="Point" status="processing" />;
  }

  return (
    <Popover
      placement="right"
      trigger="click"
      title={data.title}
      content={<p>{data.description}</p>}
    >
      <Badge className="Point" status="processing" />
    </Popover>
  );
};

export default Point;
