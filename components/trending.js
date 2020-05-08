import React, { Component } from 'react';
import { View } from 'react-native'
import { API_KEY } from 'react-native-dotenv'

class Trending extends Component {
    state = {
        trendingList: []
    }

    componentWillMount() {
        return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((parsedRes) => { console.log(parsedRes)})
    }

    render() {
        return (
            <View></View>
        );
    }
}

export default Trending;