import axios, { AxiosRequestConfig } from 'axios';

const handlePublicRequest = async <T>(
  request: AxiosRequestConfig,
): Promise<T> => {
  const { data } = await axios(request);

  return data;
};

export default handlePublicRequest;
