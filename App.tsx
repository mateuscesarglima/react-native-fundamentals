import React from 'react';
// View é como se fosse uma div e o text é o texto
import {Home} from './src/pages/Home';
import {StatusBar} from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <Home />
    </>
  );
}
