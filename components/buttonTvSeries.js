import React, { Component } from 'react'
import { Button } from 'react-native-elements'

const TvSeriesButton = props => {

    return (
        <Button
            raised
            type="clear"
            title="go to TV shows"
            buttonStyle={{width:"80%"}}
            onPress={() => props.navigate('TvSeries', { tvSeries: props.data, actionOnRow: props.actionOnRow})}
        ></Button>
    );
};

export default TvSeriesButton;