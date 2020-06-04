import React from 'react';

import { StatusBar } from 'react-native';
import AppContainer from './src/routes';

export default function App() {
  console.disableYellowBox = true;

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <AppContainer />
    </>
  );
}
