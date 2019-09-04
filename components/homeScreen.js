import React, { Component } from 'react';
import { StyleSheet, View, Button, ImageBackground, Text } from 'react-native';
import { Process } from '../process';
import { SearchBar } from 'react-native-elements';
import SearchResults from './searchResults';
import TvSeriesButton from './buttonTvSeries';
import MoviesButton from './buttonMovies';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
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
        this.fetchMovieSearch()
    };

    goToDetail = (item) => {
        return item
    }

    render() {
        let movieSearch;
        if(this.state.search.length >= 3) {
           movieSearch = <SearchResults 
           data={this.state.searchResult} 
           actionOnRow={this.goToDetail}
           title={this.state.search}
           navigate={this.props.navigation.navigate}
           />
        }

        return (

            <View style={styles.container}>
                <ImageBackground source={require('../img/homepage.jpeg')} style={{width: '100%', height: '100%'}}>
                    <Text>Inside</Text>
                    <SearchBar
                        placeholder="Search here..."
                        onChangeText={this.updateSearch}
                        value={this.state.search}
                    />
                    <MoviesButton 
                        navigate={this.props.navigation.navigate}  
                        data={this.state.tvSeriesList} 
                        actionOnRow={this.goToDetail}   
                    />
                    <TvSeriesButton 
                        navigate={this.props.navigation.navigate}  
                        data={this.state.tvSeriesList} 
                        actionOnRow={this.goToDetail}   
                    />
                    {movieSearch}
                </ImageBackground>
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
