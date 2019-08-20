import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

const SearchResults = props => {
 console.log(props)
  const halfArray = props.data;
  return (
    <View>
      <Text style={styles.title}>Search results for: {props.title}</Text>
      <ScrollView style={{ maxHeight: 600 }}>
        <View style={{ flexDirection: 'row', marginLeft: 9 }}>
          <FlatList
            data={halfArray.slice(0, (props.data.length / 2))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('ItemDetail', {detail: props.actionOnRow(item)} )}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Image source={
                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                  }
                    style={styles.list} key={item.id} /><Text style={styles.text}>{item.title}</Text></View>
              </TouchableWithoutFeedback>
            }
          />
          <FlatList
            data={halfArray.slice((props.data.length / 2), (props.data.length - 1))}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              <TouchableWithoutFeedback onPress={() => props.actionOnRow(item)}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Image source={
                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                  }
                    style={styles.list} key={item.id} /><Text style={styles.text}>{item.title}</Text></View>
              </TouchableWithoutFeedback>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({

  list: {
    height: 90,
    width: 190,
    marginRight: 228
  },
  text: {
    color: 'white',
    width: '90%',
    marginBottom: 12
  },
  title: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 24
  }
});


export default SearchResults;