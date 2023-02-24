import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {ActionTabRoutes} from './action.tab.routes';

const Routes = () => {
  return (
    <NavigationContainer>
      <ActionTabRoutes />
    </NavigationContainer>
  );
};

export {Routes};
