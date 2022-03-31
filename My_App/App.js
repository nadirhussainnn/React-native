/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import {StyleSheet, SafeAreaView, StatusBar} from 'react-native';

//My Components
import FlatListComponent from './Components/FlatListComponent';
import FlatListVertical from './Components/FlatListVertical';
import Dashboard from './Components/Dashboard';
import PressableBox from './Components/PressableBox';
import FlexBox from './Components/FlexBox';

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
    {/* <StatusBar barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      > */}
      {/* <Dashboard /> */}
      {/* <PressableBox /> */}
      <FlexBox />
    {/* </StatusBar> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
  }
});

export default App;


//For adding icons
//https://github.com/oblador/react-native-vector-icons

//Start emulator
//emulator -avd Nexus_6_API_30