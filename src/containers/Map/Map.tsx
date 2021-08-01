import React from 'react';
import { Map as GMap, GoogleAPI, GoogleApiWrapper } from 'google-maps-react';

import { GOOGLE_API_KEY } from '../../constants';

const Map: React.FC = ({ google }: GoogleAPI) => <GMap google={google} />;

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY as string,
})(Map);
