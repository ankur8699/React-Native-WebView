import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View} from 'react-native';
import { WebView } from 'react-native-webview';

export default class SettingScreen extends Component {
  render(){
    return(
        <WebView
          source={{
            uri: 'https://shop.gftpl.in/'
          }}
          
        />);
  }
  }

