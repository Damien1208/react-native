import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';


const Movies = props => {
    return (
        <View>
            <Text style={styles.title}>Movies</Text>
            <ScrollView style={{height: '100%'}}>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={props.navigation.state.params.movies}
                        numColumns={2}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) =>
                        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('ItemDetail',{ detail: props.navigation.state.params.actionOnRow(item) } )}>
                                <View style={{ flex: 1, flexDirection: 'column', marginBottom: 3 }}>
                                    <Image source={
                                        { uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}` }
                                    }
                                        style={styles.list} key={item.id} /><Text style={styles.text}>{item.title.length > 20 ? item.title.slice(0, 20) +'...' : item.title}</Text></View>
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
        marginRight: 200
    },
    text: {
        color: 'black',
        width: '90%',
        marginBottom: 10,
        fontSize: 17,
        marginLeft: 5
    },
    title: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 24
    }
});


export default Movies;