import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView } from 'react-native';

const Movies = props => {
    const halfArray = props.data;

    return (
        <View>
            <Text style={styles.title}>Movies</Text>
            <ScrollView style={{ maxHeight: 600 }}>
                <View style={{ flexDirection: 'row', marginLeft: 10}}>
                    <FlatList
                        data={halfArray.slice(0, (props.data.length / 2))}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image source={
                                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                                }
                                    style={styles.list} key={item.id}  /><Text style={styles.text}>{item.title}</Text></View>
                        }
                    />
                    <FlatList
                        data={halfArray.slice((props.data.length / 2), (props.data.length - 1))}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <Image source={
                                    { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                                }
                                    style={styles.list} key={item.id} /><Text style={styles.text}>{item.title}</Text></View>
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
        marginRight: 200
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


export default Movies;