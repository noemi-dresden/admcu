import React, { Component } from 'react';
import {
  Platform,
} from 'react-native';

import Tandem from './src/container/tandem';


export default class App extends Component<{}> {
  render() {
    return (
        <Tandem />
    );
  }
}