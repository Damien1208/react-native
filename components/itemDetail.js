import React from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';

const ItemDetail = props => {

    let title;
    if (props.navigation.state.params.detail.title) {
        title = <Text style={styles.title}> {props.navigation.state.params.detail.title}</Text>
    } else {
        title = <Text style={styles.title}> {props.navigation.state.params.detail.name}</Text>
    }

    let popularity = (props.navigation.state.params.detail.popularity) * 1000;

    return (
        <ScrollView style={{ height: 600 }}>
        <View>
            {title}
            <Image
                style={{ width: '100%', height: 200 }}
                source={
                    { uri: `https://image.tmdb.org/t/p/w200${props.navigation.state.params.detail.poster_path}` }
                } />
            
                <Text style={styles.text}> Synopsis : </Text>
                <Text style={styles.descritpion}>
                    {props.navigation.state.params.detail.overview ? props.navigation.state.params.detail.overview : 'Sorry, there is no detail on this movie'}
                </Text>
                <Text style={styles.details}>Date of release: {
                    props.navigation.state.params.detail.first_air_date ? props.navigation.state.params.detail.first_air_date : 'n/a'
                }</Text>
                <Text style={styles.details}>Country of origin: {
                    props.navigation.state.params.detail.origin_country ? props.navigation.state.params.detail.origin_country : 'n/a'
                }</Text>
                <Text style={styles.details}>Original language: {
                    props.navigation.state.params.detail.original_language ? props.navigation.state.params.detail.original_language : 'n/a'
                }</Text>
                <Text style={styles.details}>Popularity: {popularity ? popularity : 'n/a'}</Text>
                <Text style={styles.details}>Vote: {
                    props.navigation.state.params.detail.vote_average ? props.navigation.state.params.detail.vote_average / 10 : 'n/a'
                    }</Text>
           
            
        </View>
     </ScrollView>

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
    },
    details: {
        fontSize: 17,
        marginLeft: 15,
        marginBottom: 6
    }
});

export default ItemDetail;