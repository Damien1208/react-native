import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

const TvSeries = props => {

  return (
    <View>
      <Text style={styles.title}>TV series</Text>
      <ScrollView style={{ height: 500 }}>
        <View style={{ flexDirection: 'row', marginLeft: 9 }}>
          <FlatList
            data={props.navigation.state.params.tvSeries}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) =>
              <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ItemDetail', { detail: props.navigation.state.params.actionOnRow(item) })}>
                <View style={{ flex: 1, flexDirection: 'column' }}>
                  <Image source={
                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                  }
                    style={styles.list} key={item.id} /><Text style={styles.text}>{item.name}</Text></View>
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
    height: 100,
    width: 190,
    marginRight: 228
  },
  text: {
    color: 'black',
    width: '90%',
    marginBottom: 12
  },
  title: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 24
  }
});

export default TvSeries;
