import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ItemDetail = props => {

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
            <Text style={styles.text}> Synopsis : </Text>
            <Text>
                {props.navigation.state.params.detail.overview}
            </Text>
        </View>


    );

}

const styles = StyleSheet.create({

    text: {
        color: 'black',
        width: '90%',
        marginLeft: 20,
        fontSize: 20
    },
    title: {
        backgroundColor: 'white',
        color: 'black',
        fontSize: 24
    }
});

export default ItemDetail;