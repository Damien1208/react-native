import React, { Component } from 'react'
import { Button } from 'react-native-elements'

const TvSeriesButton = props => {
    return (
        <Button
            type="clear"
            title="go to tv shows"
            buttonStyle={{width:"40%"}}
            onPress={() => props.navigate('TvSeries', { tvSeries: props.data, actionOnRow: props.actionOnRow})}
        ></Button>
    );
};

export default TvSeriesButton;
