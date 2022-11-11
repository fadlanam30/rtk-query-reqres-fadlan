import React from 'react';
import {
  DefaultTheme as NavigationDefaultTheme, NavigationContainer
} from '@react-navigation/native';
import {
  adaptNavigationTheme,
  MD3LightTheme,
  Provider as PaperProvider
} from 'react-native-paper';
import { Provider } from 'react-redux'
import { store } from './src/redux/store';
import Router from './src/router';

const { LightTheme } = adaptNavigationTheme({
  light: NavigationDefaultTheme,
})

const CombinedDefaultTheme = {
  ...MD3LightTheme,
  ...LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    ...LightTheme.colors,
  }
}

export default function App() {
  return (
    <PaperProvider theme={CombinedDefaultTheme}>
      <Provider store={store}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <Router />
        </NavigationContainer>
      </Provider>
    </PaperProvider>
  );
}