import React, { Component } from 'react'
import { Button } from 'react-native'

const TvButton = props => {
    return (
        <Button title="See TV series" onPress={props.getTvSeriesList} />
    );
};

export default TvButton;