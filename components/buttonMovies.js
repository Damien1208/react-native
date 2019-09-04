import React, { Component } from 'react';
import { Button } from 'react-native'


const  MoviesButton = props => {
   
    return (
        <Button
            title="go to movies"
            onPress={() => props.navigate('Movies', { movies: props.data, actionOnRow: props.actionOnRow })}
        ></Button>
    );
};

export default MoviesButton;