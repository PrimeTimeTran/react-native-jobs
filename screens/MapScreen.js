import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { MapView } from 'expo';
import actions from '../actions';
import { connect } from 'react-redux';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
    // https://jobs.github.com/positions.json?lat=37.3229978&long=-122.0321823
    // http://api.indeed.com/ads/apisearch?publisher=4201738803816157&q=java&l=austin%2C+tx&v=2&format=json
  }

  componentDidMount() {
    this.setState({ mapLoaded: true });
  }

  onRegionChangeComplete = (region) => {
    this.setState({ region });
  }

  onButtonPress = () => {
    this.props.fetchJobs(this.state.region);
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size='large'/>
        </View>
      )
    }
    return (
      <View style={{ flex : 1 }}>
        <MapView
          region={this.state.region}
          style={{ flex: 1}}
          onRegionChangeComplete={this.onRegionChangeComplete}
        />
        <View style={styles.buttonContainerStyle}>
          <Button
            large
            title='Search'
            backgroundColor='#009688'
            icon={{ name: 'search' }}
            onPress={this.onButtonPress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0
  }
}

export default connect(null, actions)(MapScreen);