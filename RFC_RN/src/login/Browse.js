import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Alert } from 'react-native';
import Swiper from 'react-native-swiper';

export default class Browse extends Component {

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  render() {
    return (
      <Swiper style={styles.wrapper}
        showsButtons={false}
        loop={false}>
        <View style={styles.slide1}>
          <Image
            style={styles.imagebg}
            source={require('../img/a.png')}
          />
        </View>
        <View style={styles.slide2}>
          <Image
            style={styles.imagebg}
            source={require('../img/b.png')}
          />
        </View>
        <View style={styles.slide3}>
          <Image
            style={styles.imagebg}
            source={require('../img/c.png')}
          />
        </View>
        <TouchableHighlight style={styles.slide1} onPress={this._onPressButton}>
          {/* <View style={styles.slide1}> */}

            <Image
              style={styles.imagebg}
              source={require('../img/d.png')}
            />
          {/* </View> */}
        </TouchableHighlight>
      </Swiper>
    );
  }
}

const styles = StyleSheet.create({

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imagebg: {
    width: '100%',
    height: '100%'
  }
});

