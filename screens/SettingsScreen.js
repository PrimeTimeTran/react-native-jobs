import React, { Component } from 'react';
import { Platform, Text, View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';
class SettingsScreen extends Component {
  // static navigationOptions = {
  //   header: {
  //     style: {
  //       marginTop: Platform.OS === 'android' ? 24 : 0
  //     }
  //   }
  // }
  render() {
    return (
      <View>
        <Button
          icon={{ name: 'delete-forever' }}
          large
          onPress={this.props.clearLikedJobs}
          title='Reset Liked Jobs'
        />
      </View>
    );
  }
}

export default connect(null, { clearLikedJobs })(SettingsScreen);