import axios, { AxiosRequestConfig } from 'axios';

import axiosWithHumps from './axiosWithHumps';

async function handlePublicRequest<T>(request: AxiosRequestConfig): Promise<T> {
  const useHumps = false;

  const axiosInstance = useHumps ? axiosWithHumps : axios;

  const { data } = await axiosInstance(request);

  return data;
}

export default handlePublicRequest;
