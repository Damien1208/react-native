import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Process } from '../process'
import { SearchBar } from 'react-native-elements';
import SearchResults from './searchResults'

class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Home Page',
    };

    state = {
        moviesList: [],
        tvSeriesList: [],
        searchResult: [],
        search: ''
    };

    componentWillMount() {
        this.fetchMovieHandler()
        this.fetchTVHandler()
    }

    fetchMovieHandler = () => {
        return fetch(`${Process.movie.BASE_URL}${Process.API_KEY}`)
            .then((res) => res.json())
            .then((parsedRes) => {
                const moviesArray = [];
                for (const key in parsedRes) {
                    moviesArray.push(parsedRes[key]);
                }
                this.setState({
                    moviesList: moviesArray[3]
                });
            })
            .catch(err => console.log(err));
    }

    fetchTVHandler = () => {
        return fetch(`${Process.tv.BASE_URL}${Process.API_KEY}`)
            .then((res) => res.json())
            .then((parsedRes) => {
                const tvSeriesArray = [];
                for (const key in parsedRes) {
                    tvSeriesArray.push(parsedRes[key]);
                }
                this.setState({
                    tvSeriesList: tvSeriesArray[3],
                });
            })
            .catch(err => console.log(err));
    }

    fetchMovieSearch = () => {
        if (this.state.length < 2) return;

        return fetch(`${Process.search.BASE_URL}${Process.API_KEY}&query=${this.state.search}`)
            .then((res) => res.json())
            .then((parsedRes) => {
                const searchResultArray = [];
                for (const key in parsedRes) {
                    searchResultArray.push(parsedRes[key]);
                }
                this.setState({
                    searchResult: searchResultArray[3]
                })
            })
            .then(this.state.search = '')
            .catch(err => console.log(err));
    }

    updateSearch = search => {
        this.setState({ search });
        console.log(this.state.search)
        this.fetchMovieSearch()
    };

    goToDetail = (item) => {
        return item
    }

    render() {
        let movieSearch;
        if(this.state.search.length > 3) {
           movieSearch = <SearchResults 
           data={this.state.searchResult} 
           actionOnRow={this.goToDetail}
           title={this.state.search}
           />
        }

        return (
            <View style={styles.container}>
                <Button
                    title="go to movies"
                    onPress={() => this.props.navigation.navigate('Movies', { movies: this.state.moviesList, actionOnRow: this.goToDetail })}
                ></Button>
                <Button
                    title="go to TV shows"
                    onPress={() => this.props.navigation.navigate('TvSeries', { tvSeries: this.state.tvSeriesList, actionOnRow: this.goToDetail })}
                ></Button>
                <SearchBar
                    placeholder="Search here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                />
                {movieSearch}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        color: 'white',
        flex: 6,
        flexDirection: 'column'
    }
});

export default HomeScreen;
