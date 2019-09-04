import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const ItemDetail = props => {
console.log(props)
    let title;
    if (props.navigation.state.params.detail.title) {
        title = <Text style={styles.title}> {props.navigation.state.params.detail.title}</Text>
    } else {
        title = <Text style={styles.title}> {props.navigation.state.params.detail.name}</Text>
    }

    return (
        <View>
            {title}
            <Image
                style={{ width: '100%', height: 200 }}
                source={
                    { uri: `https://image.tmdb.org/t/p/w200${props.navigation.state.params.detail.poster_path}` }
                } />
            <ScrollView style={{ maxHeight: 600 }}>
                <Text style={styles.text}> Synopsis : </Text>
                <Text style={styles.descritpion}>
                    {props.navigation.state.params.detail.overview}
                </Text>
                <Text>{props.navigation.state.params.detail.first_air_date}</Text>
                <Text>{props.navigation.state.params.detail.origin_country}</Text>
                <Text>{props.navigation.state.params.detail.original_language}</Text>
                <Text>{props.navigation.state.params.detail.popularity}</Text>
                <Text>{props.navigation.state.params.detail.vote_average}</Text>
            </ScrollView>
            
        </View>


    );

}

const styles = StyleSheet.create({

    text: {
        color: 'black',
        width: '90%',
        marginLeft: 20,
        fontSize: 20,
        paddingTop: 10
        
    },
    title: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 24,
        paddingBottom: 10
    },
    descritpion: {
        fontSize: 19,
        textAlign: "justify",
        margin: 15
    }
});

export default ItemDetail;