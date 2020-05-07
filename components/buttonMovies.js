import React, { Component } from 'react';
import { Button } from 'react-native-elements'


const  MoviesButton = props => {
   
    return (
        <Button
            raised
            title="go to movies"
            type="outline"
            onPress={() => props.navigate('Movies', { movies: props.data, actionOnRow: props.actionOnRow })}
        ></Button>
    );
};

export default MoviesButton;