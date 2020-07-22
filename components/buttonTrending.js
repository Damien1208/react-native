import React, { Component } from 'react';
import { Button } from 'react-native-elements'

const  TrendingButton = props => {
    return (
        <Button
            title="go to trending"
            type="clear"
            buttonStyle={{width:"40%"}}
            onPress={() => props.navigate('Trending', { trendingMovies: props.data, actionOnRow: props.actionOnRow })}
        ></Button>
    );
};

export default TrendingButton;