import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { TabBar } from './components/TabBar';
import { TopBar } from './components/TopBar';

class App extends Component {
  render() {
    return (
      <SafeAreaView style={s.container}>
        <TopBar
          style={s.topBar}
          displayText="Focus Timer"
        />
        <View style={s.screen}></View>
        <TabBar style={s.tabBar}/>
      </SafeAreaView>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  topBar: {
    flexGrow: 0,
  },
  screen: {
    flexGrow: 1,
  },
  tabBar: {
    flexGrow: 0,
  },
});

export default App;