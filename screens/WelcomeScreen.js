import React, { Component } from 'react';
import { StyleSheet, View, Text, } from 'react-native';

import Slides from '../components/slides'

const SLIDE_DATA = [
  { text: 'Welcome to Job App', color: '#03A9F4' },
  { text: 'Use this to get a job', color: '#009688' },
  { text: 'Set your location, then swipe away', color: '#03A9F4' }
]

 class Welcome extends Component {
   onSlidesComplete = () => {
    this.props.navigation.navigate('auth')
  }

  render() {
    return (
      <Slides
        data={SLIDE_DATA}
        onComplete={this.onSlidesComplete}
      />
    );
  }
}

export default Welcome;