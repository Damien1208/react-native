import React, { Component } from 'react';
import { Button } from 'react-native'


class MoviesButton extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="go to movies"
                onPress={() => this.props.navigation.navigate('Movies', { movies: this.state.moviesList })}
            ></Button>
        );
    }
   

};

export default MoviesButton;