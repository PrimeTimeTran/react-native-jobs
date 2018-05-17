import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';

class AuthScreen extends Component {
  componentDidMount() {
    console.log('Mounted')
    this.props.facebookLogin();
    // AsyncStorage.removeItem('fb_token');
  }

  componentWillUnMount() {
    console.log('Unmounted')
  }

  render() {
    return (
      <View>
        <Text> AuthScreen </Text>
      </View>
    );
  }
}

export default connect(null, actions)(AuthScreen);
