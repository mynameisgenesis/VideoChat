/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
  PermissionsAndroid
} from 'react-native';
import { WebView } from 'react-native-webview';

function App(): JSX.Element {

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  requestCameraPermission();

  return (
    <WebView
      style={styles.video}
      scalesPageToFsit
      originWhitelist={['*']}
      source={{ uri: 'http://10.30.6.7:3000' }} />
    // source={{ html: '<iframe width="100%" height="50%" src="http://10.30.6.7:3000" frameborder="0" allowusermedia allow="camera; microphone; display-capture; fullscreen; clipboard-read; clipboard-write; autoplay; encrypted-media" allowfullscreen></iframe>' }} />
  );
}

const styles = StyleSheet.create({
  video: {
    flex: 1,
    alignItems: 'center',
  }
});

export default App;
