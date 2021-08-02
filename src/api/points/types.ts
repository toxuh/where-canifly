import type { AnyObject } from '../../types';
import type { ErrorResponse } from '../utils/types';

export type Position = {
  lat: number;
  lon: number;
};

export type Point = {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  radius: number;
  typeId: string;
  userId: string;
};

export type GetPointsDTO = Point & ErrorResponse;

export type GetPointsType = {
  latitude: number;
  longitude: number;
  radius: number;
  layerId?: string;
};

export type AddPointType = {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  typeId: string;
};
