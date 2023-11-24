import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './navigation/Route';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
