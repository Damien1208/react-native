
import React from 'react'
import { Button, View} from 'react-native'

const MoviesButton = props => {
    return (
        <Button title="See movies" onPress={props.getMovieList} />
    );

};

export default MoviesButton;