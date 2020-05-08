import React, { Component } from 'react';
import { Button } from 'react-native-elements'

const  TrendingButton = props => {
   
    return (
        <Button
            raised
            title="go to trending Now"
            type="clear"
            buttonStyle={{width:"80%"}}
            onPress={() => props.navigate('Movies', { movies: props.data, actionOnRow: props.actionOnRow })}
        ></Button>
    );
};

export default TrendingButton;