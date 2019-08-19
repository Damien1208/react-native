import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';

const ItemDetail = props => {
    console.log(props.navigation.state.params.detail.poster_path)
    let title;
    if (props.navigation.state.params.detail.title) {
        title = <Text> {props.navigation.state.params.detail.title}</Text>
    } else {
        title = <Text> {props.navigation.state.params.detail.name}</Text>
    }

    return (
        <View>
            <Image 
            style={{width: '80%', height: '60%'}}
            source={
                { uri: `https://image.tmdb.org/t/p/w200${props.navigation.state.params.detail.poster_path}` }
            } />
            {title}
        </View>
        
       
    );

}

export default ItemDetail;