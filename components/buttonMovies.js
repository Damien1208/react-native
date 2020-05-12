import React, { Component } from 'react';
import { Button } from 'react-native-elements'


const  MoviesButton = props => {
   
    return (
        <Button
            title="go to movies"
            type="clear"
            buttonStyle={{ width:"40%" }}
            onPress={() => props.navigate('Movies', { movies: props.data, actionOnRow: props.actionOnRow })}
        ></Button>
    );
};

export default MoviesButton;