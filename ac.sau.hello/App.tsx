import React from 'react';
import { View, Text } from 'react-native';
import Lesson from './lesson';

export default class App extends React.Component{
  render(){
    return (
    <View style={{flex: 1,}}>
      <Lesson></Lesson>
    </View>
    );
  }
}

