import React, { Component } from 'react';
import {  View, Text, Platform } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { Button, Card, Icon } from 'react-native-elements';

import * as actions from '../actions';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  renderCard(job) {
    const {
      longitude, latitude, jobtitle,
      company, formattedRelativeTime
    } = job;

    const initialRegion = {
      longitude,
      latitude,
      latitudeDelta: 0.045,
      longitudeDelta: 0.02
    };

    return (
      <Card title={jobtitle}>
        <View style={{ height: 300 }}>
          <MapView
            scrollEnabled={false}
            style={{ flex: 1 }}
            cacheEnabled={Platform.OS === 'android'}
            initialRegion={initialRegion}
          >
          </MapView>
        </View>
        <View style={styles.detailWrapper}>
          <Text>{company}</Text>
          <Text>{formattedRelativeTime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<\/?b>/g, "")}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards = () => {
    return (
      <Card
        title='No More Jobs'
      >
        <Button
          backgroundColor="#03A9F4"
          icon={{ name: 'my-location' }}
          large
          onPress={() => this.props.navigation.navigate('Map') }
          title='Back To Map'
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={{ marginTop: 10 }}>
        <Swipe
          data={this.props.jobs}
          keyProp='jobkey'
          onSwipeRight={job => this.props.likeJob(job)}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}


function mapStateToProps({ jobs }) {
  return { jobs: jobs.results };
}

export default connect(mapStateToProps, actions)(DeckScreen);