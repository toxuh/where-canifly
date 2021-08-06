import type { ErrorResponse } from '../utils/types';

export type Position = {
  lat: number;
  lon: number;
  zoom?: number;
};

export type Point = {
  id: string;
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  zoom: number;
  typeId: string;
  userId: string;
};

export type GetPointsDTO = Point & ErrorResponse;

export type SetNewPositionType = {
  latitude?: number;
  longitude?: number;
  zoom?: number;
  layerId?: string;
};

export type GetPointsType = {
  latitude: number;
  longitude: number;
  zoom: number;
  typeId: string;
  layerId?: string;
};

export type AddPointType = {
  title: string;
  description: string;
  latitude: number;
  longitude: number;
  typeId: string;
};
