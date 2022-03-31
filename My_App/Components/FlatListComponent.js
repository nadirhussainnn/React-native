import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
} from 'react-native';

import axios from 'axios';

const Item = props => {
  function onPressItem() {
    alert('Hello');
  }

  return (
    <TouchableOpacity onPress={onPressItem}>
      <View style={{backgroundColor: '#f9c2ff', padding: 20, height:'30%'}}>
        <Text style={{fontSize: 10}}>{props.title + ' \n ' + props.time}</Text>
        <Image
          source={{uri: props.url}}
          style={{width: '100%', height: '90%'}}
        />
      </View>
    </TouchableOpacity>
  );
};

export default function FlatListComponent() {
  // getData();
  const [photos, setPhotos] = useState([]);

  const URL = `https://api.unsplash.com/photos/random?count=5&client_id=rKWRPCDkUnEUjYs4orsMF-RG8QaMBs-tkq7jq48iTOo`;
  useEffect(() => {
    axios
      .get(URL)
      .then(resp => resp)
      .then(resp => {
        setPhotos(resp.data);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
      <Item
        title={item.id}
        url={item.user.profile_image.large}
        time={new Date().toISOString()}></Item>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={true} //Displays scrollbar at Statusbar
        data={photos}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});