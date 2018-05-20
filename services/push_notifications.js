import { Permissions, Notifications } from 'expo';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const PUSH_ENDPOINT = 'http://rallycoding.herokuapp.com/api/tokens'

export default async () => {
  let previousToken = await AsyncStorage.getItem('pushtoken');
  console.log(previousToken);
  if (previousToken) {
    return;
  }
    let response = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    console.log('Status: ', response)

    if (response.status !== 'granted') {
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    await axios.post(PUSH_ENDPOINT, { token: { token } })
    AsyncStorage.setItem('pushtoken', token);
}
