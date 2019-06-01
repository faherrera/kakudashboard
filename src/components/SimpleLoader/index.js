import React from 'react';
import { Dimmer, Loader } from 'semantic-ui-react';

const SimpleLoader = () => (
  <Dimmer active>
    <Loader size='massive'>Loading....</Loader>
  </Dimmer>
)

export default SimpleLoader;