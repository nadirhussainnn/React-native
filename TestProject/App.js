
import React from 'react';
import NBCard from './components/NBCard';
// import { NativeBaseProvider } from 'native-base';
import { ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from "@react-navigation/native";
import NBActionSheet from './components/NBActionSheet';

const App= () => {

  return (
    <NativeBaseProvider>
          <NavigationContainer>
      <NativeBaseProvider>
        <NBDrawer />
      </NativeBaseProvider>
    </NavigationContainer>
      {/* <ScrollView>
        {Array(5).fill().map((item,index)=>{
          return(
            <TouchableOpacity onPress={()=>{alert(index)}}  style={styles.card}>
            <NBCard/>
            </TouchableOpacity>
          )
        })}
    </ScrollView>
    <NBActionSheet /> */}
    </NativeBaseProvider>
  );
};

const styles=StyleSheet.create({
  card:{
    marginTop:10,
  }
})
export default App;
