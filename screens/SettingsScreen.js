import React, { Component } from 'react';
import { View, Text, } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { clearLikedJobs } from '../actions';
class SettingsScreen extends Component {
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