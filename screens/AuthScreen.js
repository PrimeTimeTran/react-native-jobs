import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

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
    if (!this.props.token) {
      return (
        <View>
          <Button
            title='Sign Out'
            onPress={() => this.props.facebookLogOut();}
          />
        </View>
      );
    }
    return (
      <View>
        <Button
          title='Login With Facebook'
          onPress={() => this.props.facebookLogIn()}
        />
      </View>
    )
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(mapStateToProps, actions)(AuthScreen);
