import { API_BASE_URL, API_VERSION } from '../../constants';

const URL = (subdomain: string): string =>
  `${API_BASE_URL}/api/v${API_VERSION}/${subdomain}`;

export default URL;
