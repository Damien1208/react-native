import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

const SearchResults = props => {

  const arraySearch = props.data;
  return (
    <View style={styles.container}>
      <ScrollView style={{ height: 500 }}>
        <View style={{ flexDirection: 'row', marginLeft: 9 }}>
          <FlatList
            data={arraySearch}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              <TouchableWithoutFeedback onPress={() => props.navigate('ItemDetail', { detail: props.actionOnRow(item) })}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Image source={
                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                  }
                    style={styles.list} key={item.id} />
                    <View>
                    <Text style={styles.text}>{item.title}</Text>
                    <Text style={{color: 'white', fontSize: 18, marginLeft: 20}}>note : {item.vote_average} / 10</Text>
                    </View>
                  </View>
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
    height: 80,
    width: '40%',
    marginBottom: 12,
  },
  text: {
    color: 'white',
    width: '90%',
    marginLeft: 20,
    fontSize: 20
  },
  title: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 24
  },
  container: {
    backgroundColor: 'black',
    marginTop: 3
  }
});


export default SearchResults;