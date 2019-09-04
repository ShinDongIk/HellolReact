import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class Lesson extends React.Component {
    render() {
        return(
        <View>
            <Text  style={styles.bigBlue}>수업 이름</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    conatiner: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FF6663',
        marginTop: 100,
    },
    bigBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        marginTop: 30,
      },
      red: {
        color: 'red',
      }
});