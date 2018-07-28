import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import style from '../Style'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={}
  }
  render() {
    return (
      <View style={style.container}>
        <Text>ini Home</Text>
      </View>
    )
  }
}

export default Home
