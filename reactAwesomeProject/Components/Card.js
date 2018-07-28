import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import style from '../Style'
import axios from 'axios'

const api = 'http://api.nobelprize.org/v1/prize.json?year=1000&yearTo=2018&category=physics&numberOfLaureates=1'

export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state={
      cards: []
    }
  }
  componentDidMount() {
    axios.get(api)
    .then(res=> {
      this.setState({
        cards: res.data.prizes
      })
    })
    .catch(err=>{
      alert(err)
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        {/* <Text>{JSON.stringify(this.state.cards)}</Text> */}
        <View style={styles.isi}>
          <Text style={styles.welcome}>
            Welcome to React Native Page!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.jsx
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigate('Profile')}>
          <Image
          style={{width: 500, height:300}}
          source={{uri:'https://cdn.allwallpaper.in/wallpapers/1920x1080/8894/juggernaut-dota-2-1920x1080-wallpaper.jpg'}}
          />
        </TouchableOpacity>
        {
          (this.state.cards.map((c,i)=>
                <View key={i}>
                  <Text>{c["laureates"][0]["motivation"]}</Text>
                </View>
              ))
        }
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, suscipit minima eaque incidunt vero nulla, molestias praesentium quasi maiores quis! Qui recusandae, id atque nam magni ratione magnam autem dolores.
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create(style);
