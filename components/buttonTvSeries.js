import React, { Component } from 'react'
import { Button } from 'react-native-elements'

const TvSeriesButton = props => {

    return (
        <Button
            raised
            type="outline"
            title="go to TV shows"
            onPress={() => props.navigate('TvSeries', { tvSeries: props.data, actionOnRow: props.actionOnRow})}
        ></Button>
    );
};

export default TvSeriesButton;