/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppRoute} from './src/routes';
import {soundContext, SoundContext} from './src/hooks';

const App = () => {
  return (
    <NavigationContainer>
      <SoundContext.Provider value={soundContext}>
        <AppRoute />
      </SoundContext.Provider>
    </NavigationContainer>
  );
};

export default App;
