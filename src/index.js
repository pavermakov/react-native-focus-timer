import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet } from 'react-native';
import { Store } from './store';
import { Navigator } from './navigator';
import { TabBar } from './containers/TabBar';
import { TopBar } from './components/TopBar';

class App extends Component {
  render() {
    return (
      <Store>
          <SafeAreaView style={s.container}>
            <TopBar
              style={s.topBar}
              displayText="Focus Timer"
            />
            <View style={s.screen}>
              <Navigator />
            </View>
            <TabBar style={s.tabBar}/>
          </SafeAreaView>
      </Store>
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