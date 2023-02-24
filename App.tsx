import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';

import {Routes} from './src/routes/index';

import theme from './src/global/styles/theme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
