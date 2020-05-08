import React, { Component } from 'react';
import { View } from 'react-native';
import { API_KEY } from 'react-native-dotenv';
import TrendingButton from './buttonTrending';

class Trending extends Component {
    state = {
        trendingList: []
    }

    componentWillMount() {
        return fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}`)
        .then((res) => res.json())
        .then((parsedRes) => {
            const trendingArray = [];
            for (const key in parsedRes) {
                trendingArray.push(parsedRes[key]);
            }
            this.setState({
                trendingList: trendingArray[3]
            });
        })
        .catch(err => console.log(err));
    }

    render() {
        return (
            <View>
                <TrendingButton />
            </View>
        );
    }
}

export default Trending;